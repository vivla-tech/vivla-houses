import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import { AuthProvider } from "./context/authContext";
// import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
