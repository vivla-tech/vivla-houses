import useHomes from "../../hooks/useHomes";
import './homes.css';

function Homes() {
  const homes = useHomes()

  console.log(homes)
  return (
    <>
      {homes?.map((mapHomes) => (
        <section className="home-list"
          key={mapHomes.id}>
          <div className="home-head">
            <h2 className="home-name">
              {mapHomes.homeName} - 150.000€
            </h2>
            <img src={mapHomes.urlImages} alt={`${mapHomes.homeName} home`} />
          </div>
          <div className="home-info">
            <ul className="home-details">
              <li>
                <p>Nº Bathrooms: {mapHomes.bathrooms}</p>
              </li>
              <li>
                <p>Nº Bedrooms: {mapHomes.bedrooms}</p>
              </li>
              <li>
                <p>Address: {mapHomes.address}</p>
              </li>
              <li>
                <p> Furnished: {mapHomes.isFurnished ? 'yes' : 'no'}</p>
              </li>
              <li>
                <p> Amenities: {mapHomes.amenities}</p>
              </li>
            </ul>
            <button>Edit</button>
            <button>Delete</button>
            <button>Open in VIVLA </button>
          </div>
        </section>
      ))}
    </>
  )
}

export default Homes;
