import React, { useEffect, useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function ServiceList(){
    const [serviced, setServiced] = useState(null)
    const navigate = useNavigate()

    const handleDelete = async (id) =>{
        try{
        await service.delete(`/service/${id}`)
        navigate(0)
        } catch(error){
            console.log(error);
        }
    }

    const findService = async () => {
        try {
            const response = await service.get("/service")
            setServiced(response.data)
            
        } catch (error){
            console.log(error);
        }
    }
    useEffect(() => {
        findService()
    },[])

    if ( serviced === null) {
        return(
            <Spinner animation="border" variant="dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          ) 
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