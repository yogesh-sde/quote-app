import { useEffect, useState } from "react";
import Quote from "./Quote";
function QuoteApp()
{
    const[quote, setQuote]= useState("");
    const[author, setAuthor]= useState("");
    const[loading, setLoading]= useState(true);
    
    async function fetchQuote() {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setQuote(data.quote);
        setAuthor(data.author);
        setLoading(false);

    }
    useEffect(()=>{
        fetchQuote();
    },[]);

    return(
   <div>
      {loading ? <div style={{backgroundColor: '#0a0a0f'}} 
     className="flex flex-col justify-center items-center min-h-screen gap-4">
     <div className="w-48 h-1 bg-indigo-600 rounded-full animate-pulse"></div>
     <p style={{color: '#9ca3af'}} className="text-sm">Loading quote...</p>
     </div>: <Quote quote={quote} author={author} onNewQuote={fetchQuote} />}
   </div>
);
}    

export default QuoteApp;