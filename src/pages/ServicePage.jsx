
import React from "react";
import { useState } from "react";
import service from "../services/config.service";

import { Link } from "react-router-dom";

function ServicePage() {
 const [type, setType]= useState("")

 const handleTypeChange = (e) => setType(e.target.value)
 
  
  
  
const handleAddService = async (e) => {
  const newService={
    type:type
  }
  try{
    await service.post("/service", newService);

  } catch (error){
    //console.log(error);
    navigate("/errorPage")
  }
};
  
  return (
    <div className="padding-top">
      <h1>Añade un servicio</h1>
      <form onSubmit={handleAddService}>
        <label>Servicio</label>
        <input
        type="text"
        name="type"
        value={type}
        onChange={handleTypeChange}
        />
        <button type="submit">Añadir</button>
      </form>
      <Link to="/service-list"><button>A la lista</button></Link>
    </div>
  );
}

export default ServicePage;
