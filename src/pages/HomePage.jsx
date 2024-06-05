import React from "react";
import { Link } from "react-router-dom";


function HomePage(){


    return (
        <div>
            <div>  
                <h2>Necesitamos que se registre para coger la cita</h2>

                <Link to={"/signup"}>Registrate Aqui</Link>

                <br />

                <h3>Ya estas registrado?</h3>

                <Link to={"/login"}>Accede aqui</Link>
                
            
            </div>
        </div>
    )
}


export default HomePage