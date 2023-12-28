import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../firebase/config/firebase";
import { doc, setDoc } from 'firebase/firestore'

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: '',
    lastName: '',
    phoneNumber: ''
  });
  const { signUp } = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // nuevo usuario con el auth de firesbase
      const userCredentials = await signUp(formData.email, formData.password)

      // añadir a firestore cuando el usuario se registra
      const userDocRef = doc(firestore, `users/${userCredentials.user.uid}`)
      setDoc(userDocRef, {
        userId: userCredentials.user.uid,
        email: formData.email,
        name: formData.name,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        onboarding: false

      })

    } catch (error) {
      console.log(error)
      // TODO: mejorar manejo de errores
    }
  };

  return (
    <>
      <h2 className="title"> Register </h2>
      <form className="form" onSubmit={handleSubmit}>

        <div>
          <label htmlFor='name'> Name </label>
          <input
            onChange={handleChange}
            type='text'
            id='name'
            name="name"
          />
        </div>

        <div>
          <label htmlFor='lastName'> Last name </label>
          <input
            onChange={handleChange}
            type='text'
            id='lastName'
            name="lastName"
          />
        </div>

        <div>
          <label htmlFor='phoneNumber'> Phone Number </label>
          <input
            onChange={handleChange}
            type='tel'
            id='phoneNumber'
            name="phoneNumber"
          />
        </div>

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

        <button type='submit'> Register </button>
      </form>
    </>
  );
}

export default Register;
