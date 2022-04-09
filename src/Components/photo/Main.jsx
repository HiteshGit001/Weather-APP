import React, { useState, useEffect } from "react"
import imgs from "./img"
import "./style.css"

function Main(){
    let[comp,setComp]=useState(imgs);
    let{tiger,lion,dog}=comp;
    let[swit,setSwit]=useState(tiger);
    let changeCom=(e)=>{
        setSwit(e.target.src)
    }
    return(
        <>
            <div className="bg-dark d-flex">
                <div className="col containe p-5">
                    <div className="h box">
                        <div className="hide">
                            <img className="t p-2 row m-2 col-4" onClick={changeCom} src={tiger}/>
                            <div className="ani-box">
                                <h3>Tiger</h3>
                            </div>
                        </div>
                    </div>
                    <div className="h box">
                        <div className="hide">
                            <img className="t p-2 row m-2 col-4" onClick={changeCom} src={lion}/>
                            <div className="ani-box">
                                <h3>Lion</h3>
                            </div>
                        </div>
                    </div>
                    <div className="h box">
                        <div className="hide">
                            <img className="t p-2 row m-2 col-4" onClick={changeCom} src={dog}/>
                            <div className="ani-box">
                                <h3>Dog</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col m-5 ml-5 p-5 bg-light">
                    <img id="i" src={swit}/>
                </div>
            </div>
            <div className="mt-3 text-center">
                <h1>Pick the image</h1>
            </div>
        </>
    )
}
export default Main;