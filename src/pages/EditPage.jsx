import { useParams } from "react-router-dom";
import service from "../services/config.service";
import { useEffect, useState } from "react";

function EditPage() {
    const [dayAvailable, setDayAvailable] = useState(null)
    const [hourAvailable, setHourAvailable] = useState(null)
    const handleDayAvailable = (e)=> setDayAvailable(e.target.value)
    const handleHourAvailable = (e)=> setHourAvailable(e.target.value)

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
        console.log(error);
    }
  }
  const editDate = async () => {
    const editDate = {
        dayAvailable:dayAvailable,
        hourAvailable:hourAvailable
    }
    try {
      const response = await service.patch(`/service/${params.id}`, editDate);
    } catch (error) {
      console.log(error);
    }
  };
  if ( dayAvailable === null) {
    return <h1>Loading dates...</h1>
  }
  return (
      <div>
      <form onSubmit={editDate}>

      <label>Edita su dia</label>
      <br />
      <input type="text" name="dayAvailable" value={dayAvailable}
      onChange={handleDayAvailable}/>
      <br />
      <label>Edita su hora</label>
      <br />
      <input type="text" name="hourAvailable" value={hourAvailable} onChange={handleHourAvailable} />
      <br />
      <button type="submit">Edita</button>
      </form>
    </div>
  );
}

export default EditPage;
