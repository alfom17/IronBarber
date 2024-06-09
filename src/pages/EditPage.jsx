import { useNavigate, useParams } from "react-router-dom";
import service from "../services/config.service";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function EditPage() {
    const [dayAvailable, setDayAvailable] = useState(null)
    const [hourAvailable, setHourAvailable] = useState(null)
    const handleDayAvailable = (e)=> setDayAvailable(e.target.value)
    const handleHourAvailable = (e)=> setHourAvailable(e.target.value)
    const navigate = useNavigate()
  const params = useParams();
  useEffect(()=>{
   getDate()
      
  },[])
  const getDate = async () =>{
    try {

        const response = await service.get(`/date/${params.id}`)
        console.log(response.data);
        setDayAvailable(response.data.dayAvailable)
        setHourAvailable(response.data.hourAvailable)
    } catch (error){
        //console.log(error);
        navigate("/errorPage")
    }
  }
  const editDate = async () => {
    const editDate = {
        dayAvailable:dayAvailable,
        hourAvailable:hourAvailable
      }
      try {
        navigate("/user")
        const response = await service.patch(`/date/${params.id}`, editDate);
        
      } catch (error) {
        //console.log(error);
        navigate("/errorPage")
      }
      
  };
  if ( dayAvailable === null) {
    return(
        <Spinner animation="border" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      )
  }
  return (
      <div className="padding-top">
      <form onSubmit={editDate}>

      <label>Edite su dia</label>
      <br />
      <input type="date" name="dayAvailable" value={dayAvailable}
      onChange={handleDayAvailable}/>
      <br />
      <label>Edite su hora</label>
      <br />
      <input type="number" name="hourAvailable" value={hourAvailable} onChange={handleHourAvailable} />
      <br />
      <button type="submit">Edita</button>
      </form>
      <br />
      <Link to="/user"><button>Volver</button></Link>
    </div>
  );
}

export default EditPage;
