import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    try {
      await service.post("/auth/signup", newUser);

      navigate("/login");
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      }
      navigate("/ErrorPage");
    }
  };

  return (
    <div>
      <h1>Registrate para poder coger cita</h1>
      <br />
      <form onSubmit={handleSignup}>
        <label>Nombre</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Registrar</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default SignupPage