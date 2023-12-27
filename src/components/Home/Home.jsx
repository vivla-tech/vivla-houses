import { useAuth } from "../../context/authContext";
import GoogleButton from "../GoogleButton/GoogleButton";
import homeImage from '../../assets/girl-with-laptop.svg';
import Navbar from "../Navbar/Navbar";
import './home.css';

export default function Home() {
  const { user } = useAuth()

  return (
    <>
      <Navbar />
      <main className="home">
        <div>

          <h1>Vivla Homes</h1>
          <p>Manage and submit our Vivla Homes!</p>

          {user
            ? <h3>Welcome back!</h3>
            : <GoogleButton />
          }
        </div>


        <img src={homeImage} alt='girl with laptop' />

      </main>
    </>
  );
}
