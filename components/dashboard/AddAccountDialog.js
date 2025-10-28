// components/dashboard/AddAccountDialog.js
import { useState } from 'react';

/**
 * Хранение подключённых аккаунтов в localStorage:
 * key: "rm_accounts"
 * value: [{ accountId, phone, username, name, paused: false }]
 */
const saveAccount = (acc) => {
  const list = JSON.parse(localStorage.getItem('rm_accounts') || '[]');
  // не дублируем
  const exists = list.find((x) => x.accountId === acc.accountId);
  const next = exists
    ? list.map((x) => (x.accountId === acc.accountId ? { ...x, ...acc } : x))
    : [...list, acc];
  localStorage.setItem('rm_accounts', JSON.stringify(next));
};

export default function AddAccountDialog({ onAdded }) {
  const [step, setStep] = useState(1); // 1: phone, 2: code, 3: password(2FA)
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Вызываем backend через наш proxy /api/tg/*
  const post = async (path, body) => {
    const r = await fetch(`/api/tg/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error || `HTTP ${r.status}`);
    return data;
  };

  const sendCode = async () => {
    setError(''); setLoading(true);
    try {
      await post('sendCode', { phone: phone.trim() });
      setStep(2);
    } catch (e) {
      setError(e.message);
    } finally { setLoading(false); }
  };

  const finishAndSave = async (accountId) => {
    // подтягиваем профиль
    const me = await post('me', { accountId });
    const name =
      [me.first_name, me.last_name].filter(Boolean).join(' ') || me.username || '';
    saveAccount({
      accountId,
      phone: `+${(me.phone || '').replace(/^\+?/, '')}` || phone.trim(),
      username: me.username || '',
      name,
      paused: false,
    });
    onAdded?.(accountId);
    // сброс формы
    setStep(1); setPhone(''); setCode(''); setPassword('');
  };

  const signIn = async () => {
    setError(''); setLoading(true);
    try {
      const data = await post('signIn', { phone: phone.trim(), code: code.trim() });
      // если 2FA, backend вернёт 403, но это поймается как ошибка в catch
      await finishAndSave(data.accountId);
    } catch (e) {
      // хостинг отдаёт 403 с текстом Two-factor...
      if (/Two-?factor|password required|Two-steps/i.test(e.message)) {
        setStep(3); // спрашиваем пароль 2FA
        setError('');
      } else {
        setError(e.message);
      }
    } finally { setLoading(false); }
  };

  const signInPassword = async () => {
    setError(''); setLoading(true);
    try {
      const data = await post('signInPassword', {
        phone: phone.trim(),
        password: password,
      });
      await finishAndSave(data.accountId);
    } catch (e) {
      setError(e.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="rm-card p-4">
      <h3 className="font-semibold mb-2">Добавить Telegram-аккаунт</h3>

      {step === 1 && (
        <>
          <label className="small muted mb-1">Телефон (в формате +7…)</label>
          <input
            type="tel"
            inputMode="tel"
            className="border rounded p-2 w-full mb-2"
            placeholder="+7XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="btn" onClick={sendCode} disabled={loading || !phone.trim()}>
            {loading ? 'Отправляем…' : 'Отправить код'}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="muted small mb-1">
            Введите код из Telegram для номера <b>{phone}</b>
          </div>
          <input
            className="border rounded p-2 w-full mb-2"
            placeholder="Код из Telegram"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="btn primary" onClick={signIn} disabled={loading || !code.trim()}>
            {loading ? 'Входим…' : 'Подтвердить и войти'}
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <div className="muted small mb-1">
            На аккаунте включена 2FA. Введите пароль.
          </div>
          <input
            type="password"
            className="border rounded p-2 w-full mb-2"
            placeholder="Пароль 2FA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn primary" onClick={signInPassword} disabled={loading || !password}>
            {loading ? 'Входим…' : 'Войти по паролю'}
          </button>
        </>
      )}

      {error && <div className="small" style={{ color: '#c0392b', marginTop: 8 }}>{error}</div>}
    </div>
  );
}
