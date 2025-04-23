import React, { useState } from "react";
import "./LoginPage.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { USER_CREDENTIALS } from "../../constant/constant"
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/contacts");
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="circle-container">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>

      <div className="login-box">
        <img className="logo-login" src="/ogma.png" alt="OGMA Logo" />

        <div className="login-text-container">
          <h2>Connexion</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            className="input-login"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="input-login"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && <span className="error-message">{errorMessage}</span>}
          <a href="/forgot-password" className="forgot-password-text">
            Mot de passe oublié?
          </a>
          <Button type="submit" text="Connexion" className="login-button"
          />
        </form>

        <div className="or-container">
          <hr className="line" />
          <span className="or-text">Or</span>
          <hr className="line" />
        </div>

        <div className="social-login">
          <Button
            text="Continue with Google"
            icon={FaGoogle}
            className="google-button"
          />
          <Button
            text="Continue with Facebook"
            icon={FaFacebookF}
            className="facebook-button"
          />
        </div>

        <div className="signup">
          <p>Not a member? <a href="#">Inscription</a></p>
        </div>
      </div>

      <div className="background-container">
        <div className="design-properties"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
