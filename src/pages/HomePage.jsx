import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import icono from "../assets/Gigachad-Transparent.png"
import 'animate.css'

function HomePage(){
const {isLoggedIn } = useContext(AuthContext)


    return (
        <div className="padding-top">
                {!isLoggedIn&&
            <div> 
                <h2>Necesitamos que se registre para coger la cita</h2>

                <Link to={"/signup"}>Registrate Aqui</Link>

                <br />

                <h3>Ya estas registrado?</h3>

                <Link to={"/login"}>Accede aqui</Link>
                
            
            </div>
                } 
                {isLoggedIn&&
                <div>
                    <img src={icono} alt="logo" className="animate__animated animate__heartBeat smallImg padding-top" />
                    <Link to={"/user"}>
                    <br />
                    <button className="margin-top">Entra a tu perfil</button>
                    </Link>
                </div>
                }
        </div>
    )
}


export default HomePage