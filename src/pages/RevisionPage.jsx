import React, { useEffect, useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

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
    } catch (error){
        console.log(error);
       

        navigate("/errorPage");
    }
}
    const handleStateAccepted = async (id) => {
        try {
            const response = await service.patch(`/date/${id}/aceptado`)
            
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
    return(
        <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      ) 
  }
  return (
    <div className="padding-top">
        <h2>{date.map((eachDate)=>{
            return (
                <p key={eachDate._id}>{eachDate.dayAvailable}{" "}{eachDate.hourAvailable}{" "}{eachDate.user.username}{" "}{eachDate.serviceId.type}<button onClick={() => handleStateAccepted(eachDate._id)}>Aceptar</button><button onClick={() => handleStateDenied(eachDate._id)}>Denegar</button><button onClick={() => handleDelete(eachDate._id)}>Borrar</button></p>
                
            )
        })}</h2>
    </div>
  )
}

export default RevisionPage;
