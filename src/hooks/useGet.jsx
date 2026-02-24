import { useEffect, useState } from "react";

function useGet(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        ...options?.headers
                    },
                    ...options
                });
                if (!res.ok) throw new Error("cant get data , status code :" + res.status);
                const resData = await res.json();
                setData(resData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }
        if (url) {
            fetchData();
        }
    }, [url]);

    return { data, loading, error }

}


export default useGet;