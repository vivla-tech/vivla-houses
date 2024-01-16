import { useEffect, useState } from "react";
import { getHomesData } from "../services/airtableServices";

function Homes() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    getHomesData()
      .then(data => {
        console.log(data);
        setHomes(data);
      })
      .catch(e => console.error(e));
  }, [])

  return (
    <>
      {homes.map((mapHomes) => (
        <p key={mapHomes.id}>{mapHomes.fields["Home Name"]}</p>
      ))}
    </>
  )
}

export default Homes;
