import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import icono from "../assets/Gigachad-Transparent.png"
function NavBar() {
  //LOGIN
  const { authenticateUser, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  //Cerrar Sesión
  const handleLogOut = async () => {
    localStorage.removeItem("authToken");
    await authenticateUser();
    navigate("/login");
  };
  return (
    <nav>
      <Link to="/user"><img src={icono} alt="" style={{width: 50}}/></Link>
      <Link to="/"><h3 className="title">IronBarber</h3></Link>
      {isLoggedIn&&
      <button onClick={handleLogOut}>Cerrar Sesión</button>
      }
    </nav>
  );
}
export default NavBar;
