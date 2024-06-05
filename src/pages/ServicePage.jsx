import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import service from "../services/config.service";
import { AuthContext } from "../context/auth.context";

function ServicePage() {
  const [type, setType] = useState("");
  const [servicedUser, setServicedUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate= useNavigate()
  const { loggedUserId } = useContext(AuthContext);

  const handleTypeChange = (e) => setType(e.target.value);
  const handleServicedUser = () => setServicedUser(loggedUserId);
  useEffect(() => {
    handleServicedUser();
  }, []);
  const handleAddService = async (e) => {
    const AddedService={
        type:type,
        servicedUser:servicedUser
    };

    try{
        await service.post("/service", AddedService)

        navigate("/date")
    } catch (error){
        if (error.response.status === 400){
            setErrorMessage(error.response.data.errorMessage)
        }
        navigate("/ErrorPage");
    }
  };
  return (
    <div>
      <h1>Escoge de los servicios disponibles</h1>
      <form onSubmit={handleAddService}>
        <label>Servicios</label>
        <br />
        <input type="radio" id="corte de pelo" name="services" value="Corte de pelo" />
        <label for="corte de pelo">Corte de pelo</label>
        <br />
        <input type="radio" id="cuidado de barba" name="services" value="Cuidado de barba" />
        <label for="cuidado de barba">Cuidado de barba</label>
        <br />
        <input type="radio" id="completo" name="services" value="Completo" />
        <label for="completo">Completo</label>
        <br />
        <button type="submit">Añadir</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}
export default ServicePage;
