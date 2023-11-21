import Register from "../Register/Register";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <>
      <h1>Vivla Partners</h1>

      {user
        ? <button onClick={handleLogout}>Logout</button>
        : <Register />
      }
    </>
  );
}
