import useHomes from "../../hooks/useHomes";

function Homes() {
  const homes = useHomes()

  console.log(homes)
  return (
    <>
      {homes?.map((mapHomes) => (
        <p key={mapHomes.id}>
          {mapHomes.homeName}
          <img src={mapHomes.urlImages} alt={`${mapHomes.homeName} home`} />
          <p>{mapHomes.hub}</p>
          <p>{mapHomes.market}</p>
          <p>{mapHomes.address}</p>
          <p>{mapHomes.coordinates}</p>
        </p>
      ))}
    </>
  )
}

export default Homes;
