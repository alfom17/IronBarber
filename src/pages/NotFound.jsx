import {Link} from "react-router-dom"

function NotFound () {
    return(
        <div>
            <h1>Vaya parece que no hay nada</h1>
            <Link to={"/home"}>Vuelve</Link>
        </div>
    )
}

export default NotFound