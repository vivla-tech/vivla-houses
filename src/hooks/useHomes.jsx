import { useState, useEffect } from "react";
import { getHomesData } from "../services/airtableServices";


function useHomes() {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        getHomesData()
            .then(data => {
                console.log(data);
                setHomes(data);
            })
            .catch(e => console.error(e));
    }, []);

    return homes;
}

export default useHomes;