import { useState } from 'react';

export default function AddAccountDialog({ onAdded }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendCode = async () => {
    setError(''); setLoading(true);
    try {
      const r = await fetch('/api/tg/sendCode', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ phone })
      });
      const data = await r.json();
      if(!r.ok) throw new Error(data.error || 'Ошибка отправки кода');
      setStep(2);
    } catch(e) { setError(e.message); }
    finally { setLoading(false); }
  };

  const signIn = async () => {
    setError(''); setLoading(true);
    try {
      const r = await fetch('/api/tg/signIn', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ phone, code })
      });
      const data = await r.json();
      if(!r.ok) throw new Error(data.error || 'Ошибка входа');

      // верифицируем профиль
      const r2 = await fetch('/api/tg/me', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ accountId: data.accountId })
      });
      const me = await r2.json();
      if(!r2.ok) throw new Error(me.error || 'Не удалось получить профиль');

      const list = JSON.parse(localStorage.getItem('rm_accounts') || '[]');
      list.push({
        accountId: data.accountId,
        phone: me.phone || phone,
        username: me.username || '',
        name: [me.first_name, me.last_name].filter(Boolean).join(' ') || ''
      });
      localStorage.setItem('rm_accounts', JSON.stringify(list));
      onAdded?.(data.accountId);

      setStep(1); setPhone(''); setCode('');
    } catch(e) { setError(e.message); }
    finally { setLoading(false); }
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
            onChange={(e)=>setPhone(e.target.value)}
          />
          <button className="btn" onClick={sendCode} disabled={loading || !phone}>
            {loading ? 'Отправляем…' : 'Отправить код'}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="muted small mb-1">Код пришёл в Telegram (диалог «Telegram») для номера {phone}</div>
          <input
            className="border rounded p-2 w-full mb-2"
            placeholder="Код из Telegram"
            value={code}
            onChange={(e)=>setCode(e.target.value)}
          />
          <button className="btn primary" onClick={signIn} disabled={loading || !code}>
            {loading ? 'Входим…' : 'Подтвердить и войти'}
          </button>
        </>
      )}

      {error && <div className="small" style={{color:'#c0392b', marginTop:8}}>{error}</div>}
    </div>
  );
}
