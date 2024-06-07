import service from "../services/config.service";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";
const ProfilePage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [user, setUser] = useState(null);
  const [userDate, setUserDate] = useState(null);
  const { loggedUserId } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleFileUpload = async (event) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
  
    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }
    setIsUploading(true);

    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")
  
    try {
      const response = await service.post("http://localhost:5005/api/upload", uploadData)
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)
  
      setImageUrl(response.data.imageUrl);
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });
  
      setIsUploading(false); // to stop the loading animation
    } catch (error) {
      console.log(error);
      //navigate("/error");
    }
  };

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
  if (userDate === null) {
    return (
      <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (user === null) {
    return (
      <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
     

<div className="padding-top">
  <label >Image: </label>
  <input
    type="file"
    name="image"
    onChange={handleFileUpload}
    disabled={isUploading}
  />
  {/* below disabled prevents the user from attempting another upload while one is already happening */}
</div>

{/* to render a loading message or spinner while uploading the picture */}
{isUploading ? <h3>... uploading image</h3> : null}

{/* below line will render a preview of the image from cloudinary */}
{imageUrl ? (<div><img src={imageUrl} alt="img" width={200} /></div>) : null}
      <h2>{user.username}</h2>
      <h3>Clica abajo para escoger de los servicios disponibles</h3>
      <Link to={"/add-date"}>Clica aqui </Link>
      <br />
      <h2>
        {userDate.map((eachDate) => {
          return (
            <p key={eachDate._id}>
              {eachDate.dayAvailable} {eachDate.hourAvailable} {eachDate.status}
              <Link to={`/date/${eachDate._id}`}>
                <button>Editar</button>
              </Link>
            </p>
          );
        })}
      </h2>
    </div>
  );
};
export default ProfilePage;
