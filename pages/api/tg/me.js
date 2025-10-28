export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const r = await fetch(`${process.env.WORKER_URL}/tg/me`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(req.body || {})
  });
  const data = await r.json();
  res.status(r.status).json(data);
}
