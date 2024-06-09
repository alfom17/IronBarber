import React, { useEffect, useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";
import icono from "../assets/Gigachad-Transparent.png";

function RevisionPage() {
  const [date, setDate] = useState(null);
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    try {
        const response = await service.delete(`/date/${id}`)
        navigate(0)
    } catch(error){
        //console.log(error);
        
        navigate("/errorPage");
    }
  }

  const handleStateDenied = async (id) => {
    try {
        const response = await service.patch(`/date/${id}/denegado`)
        navigate(0)
    } catch (error){
        console.log(error);
       

        navigate("/errorPage");
    }
}
    const handleStateAccepted = async (id) => {
        try {
            const response = await service.patch(`/date/${id}/aceptado`)
            navigate(0)
        } catch (error){
            //console.log(error);
            
    
            navigate("/errorPage");
        }
    }
    const findDate = async () => {
        try {
            const response = await service.get("/date");
            setDate(response.data);
            console.log(response.data);
      } catch (error) {
        //console.log(error);
        

       navigate("/errorPage");
      }
    };
    useEffect(() => {
        
        findDate()
  },[]);
  if ( date === null) {
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
    <div className="padding-top">
        <h2>{date.map((eachDate)=>{
            return (
                <p className="centered">

                <img src={eachDate.user.imageUrl} style={{width: 100}}></img>
                <p key={eachDate._id}>La cita de {eachDate.user.username} para {eachDate.serviceId.type} el dia {eachDate.dayAvailable} a las {eachDate.hourAvailable} con estado actual {eachDate.status}<div><button onClick={() => handleStateAccepted(eachDate._id)}>Aceptar</button><button onClick={() => handleStateDenied(eachDate._id)}>Denegar</button><button onClick={() => handleDelete(eachDate._id)}>Borrar</button></div></p>
                
                </p>
            )
        })}</h2>
    </div>
  )
}

export default RevisionPage;
