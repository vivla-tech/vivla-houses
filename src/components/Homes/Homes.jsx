import { useState } from "react";
import useHomes from "../../hooks/useHomes";
import './homes.css';
import EditModal from "../EditModal/EditModal";

function Homes() {
  const { homes, removeHome } = useHomes()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {homes?.map((mapHomes) => (
        <section className="home-list"
          key={mapHomes.id}>
          <div className="home-head">
            <h2 className="home-name">
              {mapHomes.homeName} - {mapHomes.price}€
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
            <button onClick={openModal}>Edit</button>
            {isModalOpen && <EditModal isOpen={openModal} isClose={closeModal} />}
            <button onClick={() => removeHome(mapHomes.id)}>Delete</button>
            <button>Open in VIVLA </button>
          </div>
        </section>
      ))}
    </>
  )
}

export default Homes;
