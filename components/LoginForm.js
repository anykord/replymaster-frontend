
import { useState } from 'react';
const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.replymaster.top';
export default function LoginForm(){
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [msg,setMsg] = useState(null);
  async function onSubmit(e){
    e.preventDefault();
    setMsg('Проверяем соединение...');
    try{
      const r = await fetch(API + '/health');
      const j = await r.json();
      setMsg(j.ok ? 'API доступно. Авторизация будет добавлена позже.' : 'API недоступно');
    }catch(err){ setMsg('Не удалось связаться с API'); }
  }
  return (
    <form onSubmit={onSubmit} className="login" id="auth">
      <h3>Войти в личный кабинет</h3>
      <p className="muted" style={{marginTop:-6}}>Пока что демо: проверяется соединение с API.</p>
      <div style={{display:'grid', gap:12, marginTop:12}}>
        <div>
          <label>E‑mail</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div>
          <label>Пароль</label>
          <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="••••••••" />
        </div>
        <button className="btn" type="submit">Войти</button>
        {msg && <div className="muted">{msg}</div>}
      </div>
    </form>
  )
}
