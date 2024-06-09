import React, { useEffect, useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";
import icono from "../assets/Gigachad-Transparent.png";

function ServiceList(){
    const [serviced, setServiced] = useState(null)
    const navigate = useNavigate()

    const handleDelete = async (id) =>{
        try{
        await service.delete(`/service/${id}`)
        navigate(0)
        } catch(error){
            //console.log(error);
            navigate("/errorPage")
        }
    }

    const findService = async () => {
        try {
            const response = await service.get("/service")
            setServiced(response.data)
            //console.log(response.data);
            
        } catch (error){
            // console.log(error);
            navigate("/errorPage")
        }
    }
    useEffect(() => {
        findService()
    },[])

    if ( serviced === null) {
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
        <h2>{serviced.map((eachService)=>{
            return (
                <p key={eachService._id}>{eachService.type}<button onClick={() => handleDelete(eachService._id)}>Borrar</button></p>
                
            )
        })}</h2>
    </div>
      )

}
export default ServiceList