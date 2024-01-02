import { useEffect, useState } from "react";
import { airtableBase } from "../services/airtableServices";

function Homes() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    airtableBase('homes')
      .select({ view: 'Grid view' })
      .all()
      .then(data => {
        console.log(data)
        setHomes(data)

      })
      .catch(e => console.error(e))
  }, [])

  return (
    <>
      {homes.map((index, mapHomes) => (
        <p key={mapHomes[index]}>{mapHomes[index]}</p>
      ))}
    </>
  )
}

export default Homes;
