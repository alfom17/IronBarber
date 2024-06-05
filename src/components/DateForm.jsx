import { useEffect, useState } from "react";
import service from "../services/config.services";
// import Calendar from "react-calendar";

 function DateForm(props) {
//   const [date, setDate] = useState(null);
//   const [day, setDay] = useState("");
//   const [Hour, setHour] = useState("");

//   useEffect(() => {
//     const findDate = async () => {
//       const response = await service.get(`/citas/${props.role}`);
//       setCitas(response.data);

//       const arrDays = [];
//       if (response.data.length > 0) {
//         response.data.map((eachDate) => {
//           return arrDays.push(eachDate.fecha);
//         });
//         const subtDays = arrDays.map((day) =>
//           Math.abs(new Date(day) - new Date())
//         );
//         const iFechaMasCercana = restaFechas.indexOf(Math.min(...restaFechas));
//         setFecha(resp.data[iFechaMasCercana].fecha); //fecha más cercana a la de 'hoy'
//         const horaArr = resp.data[iFechaMasCercana].fecha.split("T");
//         const horaExacta = horaArr[1].split(".");
//         setConsulta(horaExacta[0]);
//       }
//     };
//     buscarCitas();
//   }, []);
 }

export default DateForm;
