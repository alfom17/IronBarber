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
    <div>
      <p className="sidebarLeft"></p>
      <p className="sidebarRight"></p>
    <nav>
      
      <Link to="/user"><img src={icono} alt="logo" style={{width: 50}} className="animate__animated animate__bounceIn animate__slow animate__infinite"/></Link>
      <Link to="/"><h3 className="title">IronBarber</h3></Link>
      {isLoggedIn&&
      <button onClick={handleLogOut}>Cerrar Sesión</button>
      }
    </nav>
    </div>
  );
}
export default NavBar;
