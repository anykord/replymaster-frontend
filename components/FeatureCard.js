
export default function FeatureCard({title,desc}){
  return (
    <div className="card">
      <div style={{fontWeight:700, marginBottom:6}}>{title}</div>
      <div className="muted">{desc}</div>
    </div>
  )
}
