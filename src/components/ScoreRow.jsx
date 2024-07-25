export default function ScoreRow({scoreDetale}) {
    const hue = (h,o="100%") => `hsla(${h}, 100%, 50%, ${o})`
    const color = hue(scoreDetale.A)
    const  backGround=hue(scoreDetale.A , "10%")
  return (
    <div className={`w-full p-3 rounded-xl flex items-center justify-between`} style={{color:color, backgroundColor:backGround }}>
        <div className="flex items-center justify-center gap-2"><span className=""><i class={`fa-solid ${scoreDetale.icon}`}></i></span><p>{scoreDetale.category}</p></div>
        <div className="flex items-center justify-center gap-2"><p className="font-semibold text-gray-900">{scoreDetale.score} </p><span className="text-gray-400"> / 100</span></div>
    </div>
  )
}
