import React, { useState, useEffect } from "react";
import "./style.css"
import axios from "axios";

function Weather(){
    let [city,setCity]=useState("hassan")
    let [data,setData]=useState({})
    let value;
    useEffect(()=>{
        value = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fe7924e3afd77da8392d407b7c6d284`)
        .then((res)=>{
            let lo=document.getElementById("lo")
            lo.innerHTML="Results"
            lo.style="color:green"
            setData(res.data)
        })
        .catch((error)=>{
            console.log(error)
            console.log("error")
            let lo=document.getElementById("lo")
            lo.innerHTML="failed"
            lo.style="color:red;"
        })
        // let v=value.data
        // setData(v)
        // console.log(data.main.temp)
        // temp=data.main.temp;
        // hum=data.main.humidity;
        // let lo=document.getElementById("lo")
        // lo.innerHTML="Results"
        // lo.style="color:green"
        // .then(response=>response.json())
        // .then(json=>{
        //     let lo=document.getElementById("lo")
        //     lo.innerHTML="Results"
        //     setData(json)
        // })
        // .catch((error)=>{
        //     // let lo=document.getElementById("lo")
        //     // lo.innerHTML="Not found"
        // })
    },[city])
    console.log(data)
    let temp=data.main?.temp;
    let hum=data.main?.humidity;
    let cCity;
    let up=(e)=>{
        console.log(e.target.value)
        cCity=e.target.value;
    }
    let serch=()=>{
        console.log(cCity)
        setCity(cCity)
    }
    
    return(
                <>
                <h6 id="lo" className="pt-5 text-center">Loading .....</h6>
                    <div className="backg box">
                    <h1 className="p-2">Weather</h1>
                    <div className="p-2">
                        <input onChange={up} type="text" placeholder="City"/>
                    </div>
                    <i class="p-2 the fa fa-globe" aria-hidden="true"></i>
                    <h2 className="p-2">City:{city}</h2>
                    <i class="p-2 the fa fa-thermometer-full" aria-hidden="true"></i>
                    <h2 className="p-2">Temp:{temp} F</h2>
                    <i class="p-2 the fa fa-cloud" aria-hidden="true"></i>
                    <h2 className="p-2">Humidity:{hum}</h2>
                    <button onClick={serch}>Serch</button>
                </div>
                </>
    )
}
export default Weather;