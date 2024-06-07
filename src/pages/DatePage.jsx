import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


function DatePage() {
const [dayAvailable, setDayAvailable] = useState("")
const [hourAvailable, setHourAvailable] = useState("")
const [serviceId, setServiceId] =useState(null)
const [serviceArr, setServiceArr] = useState("")


const navigate= useNavigate()


const  handleDayAvailable = (e)=> setDayAvailable(e.target.value);
const  handleHourAvailable = (e)=> setHourAvailable(e.target.value)

useEffect(()=>{
    getService()
    
},[])

const getService= async(e) =>{
    try{
    const response= await service.get("/service")
    setServiceArr(response.data)
    console.log(response.data);
 } catch(error){
    console.log(error);
 }
}
const handleAddDate= async (e) =>{
    e.preventDefault()
    const newDate = {
        dayAvailable:dayAvailable,
        hourAvailable:hourAvailable,
        serviceId:serviceId
    };

    try {
        //if (serviceId !== null&&serviceId !=="")
        await service.post("/date", newDate)
        navigate("/user")
    } catch(error){
        console.log(error);
    }
}
if (serviceArr === null) {
    return (
      <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
    return(
        <div>
            
            <h1 className="padding-top">Concerta tu cita aqui</h1>
            <br />
            <form onSubmit={handleAddDate}>
                <label>Dia</label>
                <input
                type="number"
                name="day"
                value={dayAvailable}
                onChange={handleDayAvailable}
                />
                <br />
                <label>Hora</label>
                <input type="number"
                name="hour"
                value={hourAvailable}
                onChange={handleHourAvailable}
                />
                <br />
                <select name="service" onChange={(e)=>setServiceId(e.target.value)}>
                {serviceArr&&serviceArr.map((eachService)=>{
                    return (
                        <option value={eachService._id}>{eachService.type}</option>
                    )
                })}
                </select>
                <br />
                <button type="submit">Añadir Cita</button>
            </form>
      </div>
    )
}


export default DatePage
