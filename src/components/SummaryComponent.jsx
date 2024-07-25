import { useEffect } from "react";
import { SUMMARY_CONTEXT_ACTIONS, useSummaryContext } from "../Context/SummaryContext";
import ScoreRow from "./ScoreRow";
import axios from "axios";

export default function SummaryComponent() {
    const {data, dispach}= useSummaryContext()
    console.log(data);
    useEffect(()=>{
        getScore()
        //dispach({type:SUMMARY_CONTEXT_ACTIONS.FETCH_SCORE, payload:[{name:"bahar"}]})
    },[])

    async function getScore(){
        try{
            const res = await axios.get(`http://localhost:3000/scores`)
            dispach({type:SUMMARY_CONTEXT_ACTIONS.FETCH_SCORE , payload:res.data})
        }catch(e){
            console.log(e.message);
        }
    }
  return (
    <div className="w-full p-8 space-y-8">
        <h1 className="text-gray-900 font-bold">Summary</h1>
        <div className="space-y-3">
        {data.map(score=><ScoreRow scoreDetale={score}/>)}
        </div>
        <button className="bg-gray-900 text-white rounded-full py-4 w-full">Continue</button>
    </div>
  )
}
