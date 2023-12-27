import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homes from "./components/Homes/Homes";
import { AuthProvider } from "./context/authContext";
import HomesForm from "./components/HomesForm/HomesForm";
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
          <Route path='/homes' element={<Homes />} />
          <Route path='/form' element={<HomesForm />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
