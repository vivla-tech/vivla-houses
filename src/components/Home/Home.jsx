import { useAuth } from "../../context/authContext";
import GoogleButton from "../GoogleButton/GoogleButton";

export default function Home() {
  const { user } = useAuth()



  return (
    <>
      <h1>Vivla Houses</h1>


      <GoogleButton />
    </>
  );
}
