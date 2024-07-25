export default function ScoreRow({scoreDetale}) {
    const hue = (h,o="100%") => `hsla(${h}, 100%, 50%, ${o})`
    const color = hue(scoreDetale.A)
    const  backGround=hue(scoreDetale.A , "10%")
  return (
    <div className={`w-full p-3 rounded-xl`} style={{color:color, backgroundColor:backGround }}>{scoreDetale.category}</div>
  )
}
