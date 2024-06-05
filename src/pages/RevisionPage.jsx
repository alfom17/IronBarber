import React, { useEffect, useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";

function RevisionPage() {
  const [date, setDate] = useState(null);
  const navigate = useNavigate()
    const handleState = async (id) => {
        try {
            const response = await service.patch(`/date/${id}/aceptado`)
        } catch (error){
            console.log(error);
            if (error.response.status === 400) {
              setErrorMessage(error.response.data.errorMessage);
            }
    
            //navigate("/errorPage");
        }
    }
    const findDate = async () => {
        try {
            const response = await service.get("/date");
            setDate(response.data);
            console.log(response.data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.errorMessage);
        }

       // navigate("/errorPage");
      }
    };
    useEffect(() => {
        
        findDate()
  },[]);
  if ( date === null) {
    return <h1>Loading dates...</h1>
  }
  return (
    <div>
        <h2>{date.map((eachDate)=>{
            return (
                <p key={eachDate._id}>{eachDate.dayAvailable}{" "}{eachDate.hourAvailable}<button onClick={() => handleState(eachDate._id)}>Estado</button></p>
            )
        })}</h2>
    </div>
  )
}

export default RevisionPage;
