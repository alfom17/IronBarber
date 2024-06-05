import service from "../services/config.service";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const findUser = async () => {
      try {
        const response = await service.get(`/user`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.errorMessage);
        }

        navigate("/errorPage");
      }
    };
    findUser();
  }, []);
  if (user === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>{user.username}</h2>

      <h3>Clica abajo para escoger de los servicios disponibles</h3>
      <Link to={"/service"}>Clica aqui </Link>
      <br />
      <h4>O clica aqui abajo para editar tu cita si ya has concertado una</h4>
      <Link to={"/date/:id"}>Editar</Link>
    </div>
  );
};
export default ProfilePage;
