import { useAuth } from "../../context/authContext";
import GoogleButton from "../GoogleButton/GoogleButton";
import homeImage from '../../assets/girl-with-laptop.svg';
import './home.css';

export default function Home() {
  const { user } = useAuth()

  return (
    <>
      <main className="home">
        <div>

          <h1>Vivla Homes</h1>
          <p>Manage and submit our Vivla Homes!</p>
          <GoogleButton />
        </div>


        <img src={homeImage} alt='girl with laptop' />

      </main>
    </>
  );
}
