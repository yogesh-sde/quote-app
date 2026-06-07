 import { useState,useEffect } from "react";
 
 const useFetch =(url  )=>{
        const[data, setData]=useState(null);
        const[loading, setLoading]= useState(true);
        const[error, setError]= useState(false);

         const fetchData = async ()=>{
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setLoading(false)
         }

        useEffect(()=>{
            
            fetchData()
            
        },[])
        return {data, loading, error, fetchData}
    }

    export default useFetch;