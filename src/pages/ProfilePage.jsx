import service from "../services/config.service";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import icono from "../assets/Gigachad-Transparent.png";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userDate, setUserDate] = useState(null);
  const { loggedUserId } = useContext(AuthContext);
  const { isAdmin } = useContext(AuthContext);

  const navigate = useNavigate();

  //loggedUserID?
  const findDateByUser = async () => {
    try {
      const response = await service.get(`/date/by-user/${loggedUserId}`);
      setUserDate(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);

      navigate("/errorPage");
    }
  };

  const findUser = async () => {
    try {
      const response = await service.get(`/user`);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);

      navigate("/errorPage");
    }
  };
  useEffect(() => {
    findDateByUser();
    findUser();
  }, []);
  if (userDate === null) {
    return (
      <p className="centered">
        <img
          src={icono}
          alt="icono"
          className="animate__animated animate__flip animate__infinite animate__slow loadingImg padding-top"
        />
        <h3 className="padding-top">Cargando...</h3>
      </p>
    );
  }
  if (user === null) {
    return (
      <p className="centered">
        <img
          src={icono}
          alt="icono"
          className="animate__animated animate__flip animate__infinite animate__slow loadingImg padding-top"
        />
        <h3 className="padding-top">Cargando...</h3>
      </p>
    );
  }
  return (
    <div className="padding-top">
      <img src={user.imageUrl} style={{ width: 100 }}></img>

      <h2>{user.username}</h2>
      <h3>Clica abajo para escoger el dia y los servicios disponibles</h3>
      <Link to={"/add-date"}>
        <button>Clica Aqui</button>{" "}
      </Link>
      <br />
      
      <h2>
        {userDate.map((eachDate) => {
          return (
            <p key={eachDate._id}>
              Su cita del {eachDate.dayAvailable} a las {eachDate.hourAvailable}{" "}
              horas esta {eachDate.status} {eachDate.type}
              <Link to={`/date/${eachDate._id}`}>
                <button>Editar</button>
              </Link>
            </p>
          );
        })}
      </h2>
      {isAdmin && (
        <div>
          <Link to={"/service"}>
            <button>Servicios</button>
          </Link>
          <Link to={"/date"}>
            <button>Revision</button>
          </Link>
        </div>
      )}
      <hr />
      <h3>Personaliza tu perfil</h3>
      <Link to="/user-pic"><button>Aqui</button></Link>
    </div>
  );
};
export default ProfilePage;
