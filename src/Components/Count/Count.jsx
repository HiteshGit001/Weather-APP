import React from "react";

class Count extends React.Component
{
    constructor() 
    {
        super()
        this.state ={
            count:0
        }
    }
    updateCount=()=>
    {
        this.setState({count:this.state.count+1})
    }
    decrementCount=()=>
    {
        this.setState({count:this.state.count-1})
    }
    resetCount=()=>
    {
        this.setState({count:this.state.count=0})
    }
    render(){
        return(
            <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={this.updateCount} >Inc</button>
                <button onClick={this.decrementCount}>Dec</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
            )
    }
}

export default Count;