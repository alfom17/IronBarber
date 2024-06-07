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
      <Link to="/"><img src={icono} alt="" style={{width: 50}}/></Link>
      <h3 class="title">IronBarber</h3>
      <button onClick={handleLogOut}>Cerrar Sesión</button>
    </nav>
  );
}
export default NavBar;
