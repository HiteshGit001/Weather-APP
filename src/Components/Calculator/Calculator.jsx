import React,{Component} from "react"
import "./Calculator.css"

class Calculator extends Component{

    constructor(){
        super()
        this.state={
            a:0,
            b:0,
            res:0
        }
    }

    add=()=>{
        this.setState({res:this.state.a+this.state.b})
    }
    sub=()=>{
        this.setState({res:this.state.a-this.state.b})
    }
    mul=()=>{
        this.setState({res:this.state.a*this.state.b})
    }
    div=()=>{
        if(this.state.b!=0){
            this.setState({res:this.state.a/this.state.b})
        }
        else{
            this.setState({res:"Infinite"})
        }
    }
    per=()=>{
        this.setState({res:(this.state.a/100)*this.state.b})
    }
    render(){
        return(
            <div className="box">
                <h1 className="head">Calculator</h1>
                <input className="vA" onChange={(e)=>{
                    this.setState({a:parseInt(e.target.value)})
                }} type="text" placeholder="A"/><br/>
                <input className="vB" onChange={(e)=>{
                    this.setState({b:parseInt(e.target.value)})
                }} type="text" placeholder="B"/>
                <button onClick={this.add}>Add</button>
                <button onClick={this.sub}>Sub</button>
                <button onClick={this.mul}>Mul</button>
                <button onClick={this.div}>Div</button>
                <button onClick={this.per}>per</button>
                <h1 className="res">Result:{this.state.res}</h1>
                <h1 className="res">A:{this.state.a}</h1>
                <h1 className="res">B:{this.state.b}</h1>
            </div>
        )
    }
}

export default Calculator