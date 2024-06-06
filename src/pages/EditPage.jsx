import { useParams } from "react-router-dom";
import service from "../services/config.service";
import { useEffect, useState } from "react";

function EditPage() {
    const [dayAvailable, setDayAvailable] = useState("")
    const [hourAvailable, setHourAvailable] = useState("")
    const handleDayAvailable = (e)=> setDayAvailable(e.target.value)
    const handleHourAvailable = (e)=> setHourAvailable(e.target.value)

  const params = useParams();
  const editDate = async () => {
    useEffect(()=>{
        handleDayAvailable()
        handleHourAvailable()
    },[])
    try {
      const response = await service.patch(`/service/${params.id}`, dayAvailable);
    } catch (error) {
      console.log(error);
    }
  };
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
