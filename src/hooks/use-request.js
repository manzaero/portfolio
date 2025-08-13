import {useEffect, useState} from "react";

export function useRequest(url, params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (!url) return
        setLoading(true)
        let isMounted = true
        fetch(url, params)
            .then(res => {
                if (!res.ok){
                    throw Error(`Request failed with status ${res.status}`);
                }
                return res.json();
            })
            .then(json => {
                if(isMounted){
                    setData(json)
                }
            })
            .catch(error => {
                if(isMounted){
                    setError(error)
                }
            })
            .finally(() => {
                if(isMounted){
                    setLoading(false)
                }
            })
        return () => {
            isMounted = false;
        };
    },[url, params])
    return {data, loading, error}
}