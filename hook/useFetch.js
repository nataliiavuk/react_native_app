import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const[data, setData]=useState([]);
    const[isLoading, setIsLoading]= useState(false);
    const[error, setError]= useState(null);

    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'b83af76649msh752f9c08f397a5cp19d604jsnf1e46984f5d4',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query },
        
      };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            /*setData("data");*/

            setData(response.data.data);
            setIsLoading(false);

        } catch (error){
            setError(error);
            alert(`${error}`);

        } finally {
            setIsLoading(false);
        }
    }

   useEffect (() => {
    fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}; 
}

export default useFetch;