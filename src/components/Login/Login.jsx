import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import '../styles.css';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {

      login(formData.email, formData.password)
      navigate('/')
    } catch (error) {
      console.log(error)
      // TODO: mejorar manejo de errores
    }

  };
  return (
    <>
      <h2 className="title"> Login </h2>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'> Email </label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            id="email"
            placeholder='yourname@gmail.com'
          />
        </div>

        <div>
          <label htmlFor='password'> Password </label>

          <input
            onChange={handleChange}
            type='password'
            name='password'
            id="password"
          />
        </div>

        <button type='submit'> Login  </button>
      </form>
    </>
  );
}

export default Login;

