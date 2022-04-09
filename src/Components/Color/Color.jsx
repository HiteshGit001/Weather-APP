import "./color.css"
import React from "react";

class Colorsel extends React.Component {
    constructor() {
        super()
        this.state = {
            color: "color"
        }
    }
    render() {
        return(
            <div>
                <h1 className={this.state.color=="red"?"red":this.state.color=="green"?"green":null}>{this.state.color}</h1>
                <button onClick={()=>{
                    this.setState({color:"red"})
                }}>Red</button>
                <button onClick={()=>{
                    this.setState({color:"green"})
                }}>Green</button>
            </div>)
    }
}

export default Colorsel;