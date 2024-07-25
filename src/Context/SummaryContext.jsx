import { createContext, useContext, useReducer } from "react";

const SummaryContext= createContext();

export const SUMMARY_CONTEXT_ACTIONS={
    FETCH_SCORE: "fetch_score"
}

function reducer(state, action){
    switch (action.type){
        case SUMMARY_CONTEXT_ACTIONS.FETCH_SCORE:
            return [...action.payload]
        default:
        return state;
    }
}

export function SummaryContextProvider ({children}){
   
    const [data, dispach]= useReducer(reducer , []) 

    return(
        <SummaryContext.Provider value={{data, dispach}}>
            {children}
        </SummaryContext.Provider>
    )
}

export const useSummaryContext =function(){
    return useContext(SummaryContext)
}