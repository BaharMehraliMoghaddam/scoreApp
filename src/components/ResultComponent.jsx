export default function ResultComponent() {
  return (
    <div className="bg-gradient-to-b from-[#5E43EA] to-[#332FD9] text-white rounded-3xl flex flex-col items-center justify-between p-8 gap-3">
        <h1 className="font-semibold">The Result</h1>
        <div className="flex items-center justify-center flex-col w-[150px] h-[150px] bg-gradient-to-t from-[#5E43EA] to-[#332FD9] rounded-full">
            <h2 className="text-3xl font-bold">76</h2>
            <span>of 100</span>
        </div>
        <h3 className="text-2xl font-semibold">
            Great
        </h3>
        <p className="text-xs text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum alias laboriosam magnam repudiandae quo!</p>
    </div>
  )
}
