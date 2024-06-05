import { Link } from "react-router-dom";


function ServicePage() {
    return(
        <div>

        <h1>Escoge de los servicios disponibles</h1>
        

        <h3>Escoge el dia de la cita</h3>
            <Link to={"/date"}>Clica aqui</Link>
        </div>
    )
}
export default ServicePage