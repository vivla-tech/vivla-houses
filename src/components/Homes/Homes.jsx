import useHomes from "../../hooks/useHomes";
import './homes.css';

function Homes() {
  const homes = useHomes()

  // console.log(homes)
  return (
    <>
      {homes?.map((mapHomes) => (
        <section className="home-list"
          key={mapHomes.id}>
          <div>
            <h2 className="home-name">
              {mapHomes.homeName} - 150.000€
            </h2>
            <img src={mapHomes.urlImages} alt={`${mapHomes.homeName} home`} />
          </div>
          <div className="home-info">
            <ul className="home-details">
              <li>
                <p>{mapHomes.hub}</p>
              </li>
              <li>
                <p>{mapHomes.market}</p>
              </li>
              <li>
                <p>{mapHomes.address}</p>
              </li>
              <li>
                <p>{mapHomes.coordinates}</p>
              </li>
            </ul>
          </div>
        </section>
      ))}
    </>
  )
}

export default Homes;
