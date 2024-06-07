import { Router, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import service from "../services/config.service";
import { AuthContext } from "../context/auth.context";

function ServicePage() {
 const [type, setType]= useState("")

 
  
  
  
const handleAddService = async (e) => {
  const newService={
    type:type
  }
  await service.post
};
  
  return (
    <div className="padding-top">
      <h1>Escoge de los servicios disponibles</h1>
      <form onSubmit={handleAddService}>
        
      </form>
    </div>
  );
}
}
export default ServicePage;
