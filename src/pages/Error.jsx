import {Link} from "react-router-dom"

function Error () {
    return(
        <div>
            <h1>Vaya parece que ha habido un error</h1>
            <Link to={"/home"}>Vuelve</Link>
        </div>
    )
}

export default Error