import useHomes from "../../hooks/useHomes";

function Homes() {
  const homes = useHomes()

  return (
    <>
      {homes?.map((mapHomes) => (
        <p key={mapHomes.id}>
          {mapHomes.fields["Home Name"]}
        </p>
      ))}
    </>
  )
}

export default Homes;
