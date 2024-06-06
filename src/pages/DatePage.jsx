import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import service from "../services/config.service";
import { useNavigate } from "react-router-dom";

function DatePage() {
const [dayAvailable, setDayAvailable] = useState("")
const [hourAvailable, setHourAvailable] = useState("")

const  handleDayAvailable = (e)=> setDayAvailable(e.target.value);
const  handleHourAvailable = (e)=> setHourAvailable(e.target.value)

    return(
        <div>
            <h1>a</h1>
      </div>
    )
}


export default DatePage
