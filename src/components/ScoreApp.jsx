import ResultComponent from "./ResultComponent";
import SummaryComponent from "./SummaryComponent";

export default function ScoreApp() {
  return (
    <div className="shadow-md grid grid-cols-2 rounded-3xl m-10 w-[700px]">
        <ResultComponent/>
        <SummaryComponent/>
    </div>
  )
}
