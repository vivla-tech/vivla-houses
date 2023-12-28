import { useState } from "react";
import { useAuth } from "../../context/authContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth()

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

