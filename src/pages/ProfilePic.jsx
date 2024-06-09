import service from "../services/config.service";
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import icono from "../assets/Gigachad-Transparent.png";



function ProfilePic() {
    const [imageUrl, setImageUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [user, setUser] = useState(null);

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
      const response = await service.post(
        "http://localhost:5005/api/upload",
        uploadData
      );
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)

      setImageUrl(response.data.imageUrl);

      if (imageUrl !== null) {
        patchImage(imageUrl);
      }
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

      setIsUploading(false); // to stop the loading animation
    } catch (error) {
      console.log(error);
      //navigate("/error");
    }
  };

  const patchImage = async () => {
    const patchImageUrl = {
      imageUrl: imageUrl,
    };
    try {
      await service.post(`/user/image`, patchImageUrl);
      navigate("/user")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="padding-top">
      

      <div className="padding">
        <label>Foto de perfil: </label>
        <input
          type="file"
          name="image"
          onChange={handleFileUpload}
          disabled={isUploading}
        />
        <button onClick={patchImage}>Confirmar</button>
        {/* below disabled prevents the user from attempting another upload while one is already happening */}
      </div>

      {/* to render a loading message or spinner while uploading the picture */}
      {isUploading ? <p className="centered">
        <img
          src={icono}
          alt="icono"
          className="animate__animated animate__flip animate__infinite animate__slow loadingImg padding-top"
        />
        <h3 className="padding-top">Cargando...</h3>
      </p>
     : null}

      {/* below line will render a preview of the image from cloudinary */}
      {imageUrl ? (
        <div>
          <img src={imageUrl} alt="img" width={200} />
        </div>
      ) : null}
    </div>
  );
}

export default ProfilePic