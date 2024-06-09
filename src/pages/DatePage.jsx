import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";

import icono from "../assets/Gigachad-Transparent.png";

function DatePage() {
  const [dayAvailable, setDayAvailable] = useState("");
  const [hourAvailable, setHourAvailable] = useState("");
  const [serviceId, setServiceId] = useState(null);
  const [serviceArr, setServiceArr] = useState("");

  const navigate = useNavigate();

  const handleSeviceId = (e) => setServiceId(e.target.value);
  const handleDayAvailable = (e) => setDayAvailable(e.target.value);
  const handleHourAvailable = (e) => setHourAvailable(e.target.value);

  useEffect(() => {
    getService();
  }, []);

  const getService = async (e) => {
    try {
      const response = await service.get("/service");
      setServiceArr(response.data);
      console.log(response.data);
    } catch (error) {
      //console.log(error);
      navigate("/errorPage");
    }
  };
  const handleAddDate = async (e) => {
    e.preventDefault();
    const newDate = {
      dayAvailable: dayAvailable,
      hourAvailable: hourAvailable,
      serviceId: serviceId,
    };

    try {
      //if (serviceId !== null&&serviceId !=="")
      await service.post("/date", newDate);
      navigate("/user");
    } catch (error) {
      navigate("/errorPage");
    }
  };
  if (serviceArr === null) {
    return (
        <p className="centered">
          <img
            src={icono}
            alt="icono"
            className="animate__animated animate__flip animate__infinite animate__slow loadingImg padding-top"
          />
          <h3 className="padding-top">Cargando...</h3>
        </p>
      );
  }
  return (
    <div>
      <h1 className="padding-top">Concerta tu cita aqui</h1>
      <br />
      <form onSubmit={handleAddDate}>
        <label>Dia</label>
        <input
          type="date"
          name="day"
          value={dayAvailable}
          onChange={handleDayAvailable}
        />
        <br />
        <label>Hora</label>
        <input
          type="number"
          name="hour"
          value={hourAvailable}
          onChange={handleHourAvailable}
        />
        <br />
        <select name="service" onChange={handleSeviceId}>
          <option value={1}>Selecciona un servicio</option>
          {serviceArr &&
            serviceArr.map((eachService) => {
              return (
                <option value={eachService._id}>{eachService.type}</option>
              );
            })}
        </select>
        <br />
        <button type="submit">Añadir Cita</button>
      </form>
    </div>
  );
}

export default DatePage;
