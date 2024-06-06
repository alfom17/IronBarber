import service from "../services/config.service";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userDate, setUserDate] = useState(null);
  const { loggedUserId } = useContext(AuthContext);

  const navigate = useNavigate();
  //loggedUserID?
  const findDateByUser = async () => {
    try {
      const response = await service.get(`/date/by-user/${loggedUserId}`);
      setUserDate(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);

      //navigate("/errorPage");
    }
  };

  const findUser = async () => {
    try {
      const response = await service.get(`/user`);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);

      //navigate("/errorPage");
    }
  };
  useEffect(() => {
    findDateByUser();
    findUser();
  }, []);
  if (user === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>{user.username}</h2>
      <h3>Clica abajo para escoger de los servicios disponibles</h3>
      <Link to={"/service"}>Clica aqui </Link>
      <br />
      <h2>
        {userDate.map((eachDate) => {
          return <p key={eachDate._id}>{eachDate.dayAvailable}{" "}{eachDate.hourAvailable}{" "}{eachDate.status}<Link to={`/date/${eachDate._id}`}><button>Editar</button></Link></p>;
        })}
      </h2>
      
    </div>
  );
};
export default ProfilePage;
