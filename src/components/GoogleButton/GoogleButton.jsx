import { useAuth } from "../../context/authContext"
import GoogleLogo from './logo_google_icon.png'
import { useNavigate } from "react-router-dom";
import './google-button.css';

export default function GoogleButton() {
    const { loginWithGoogle } = useAuth()
    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle()
            navigate('/')
        } catch (error) {
            console.error('There was an error signing in with Google. Please try again.', error)
        }
    }
    return (
        <>
            <div className="login-google-container"
                onClick={handleGoogleLogin}>
                <img className="google-logo" src={GoogleLogo} alt="google logo" />
                <button className="google-login-btn">
                    Login with Google
                </button>
            </div>
        </>
    )
}