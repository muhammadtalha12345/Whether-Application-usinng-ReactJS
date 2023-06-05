import React, { useEffect, useState } from "react";
import "./css/style.css";
function Tempapp(){
    const [city, setCity]=useState(null);
    const [search, setSearch]=useState("Karachi");

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b790b7cdba1e91289578ecf6d9feb5f4`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
return (
    <>
    <div className="box">
        <div className="inputData">
            <input
            type="search"
            value={search}
            className="inputField"
            onChange={(e)=>{
                setSearch(e.target.value)
            }}/>
        </div>

        {!city ? (
            <p className="errorMsg">No Data found</p>
        ):(
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
            {city.temp} *Cel
            </h1>
            <h3 className="tempmin_max" >Min:{city.temp_min} | Max:{city.temp_max}</h3>
            </div>
        )
        }
        
    </div>
    </>
)

}
export default Tempapp