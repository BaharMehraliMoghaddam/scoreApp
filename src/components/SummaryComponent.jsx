import ScoreRow from "./ScoreRow";

export default function SummaryComponent() {
  return (
    <div className="w-full p-8 space-y-8">
        <h1 className="text-gray-900 font-bold">Summary</h1>
        <div className="space-y-3">
        <ScoreRow/>
        <ScoreRow/>
        <ScoreRow/>
        <ScoreRow/>
        </div>
        <button className="bg-gray-900 text-white rounded-full py-4 w-full">Continue</button>
    </div>
  )
}
