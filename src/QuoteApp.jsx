import { useEffect, useState } from "react";
import Quote from "./Quote";
import useFetch from "./hooks/useFetch";
function QuoteApp()
{
    
    const{data, loading, error, fetchData}=useFetch("https://dummyjson.com/quotes/random");

   

    return(
   <div>
      {loading ? <div style={{backgroundColor: '#0a0a0f'}} 
     className="flex flex-col justify-center items-center min-h-screen gap-4">
     <div className="w-48 h-1 bg-indigo-600 rounded-full animate-pulse"></div>
     <p style={{color: '#9ca3af'}} className="text-sm">Loading quote...</p>
     </div>: <Quote quote={data.quote} author={data.author}  onNewQuote={fetchData}/>}
   </div>
);
}    

export default QuoteApp;