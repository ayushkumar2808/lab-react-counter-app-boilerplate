import React,{Component} from "react";

class Stopwatch extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    start(){
        this.setState({
          
            count: this.state.count+1
           
        })
    }
    reset(){
        this.setState({
            count:0
        })
    }


    render(){
        return(
            <>
            <h1>Stopwatch</h1>
            <div id='counter'>{this.state.count}</div>
            <div id="display-flex">
                <button onClick={()=>this.start()} className="buttons">Start</button>
                <button onClick={()=>this.stop()} className="buttons">Stop</button>
                <button onClick={()=>this.reset()} className="buttons">Reset</button>
                
            </div>
            </>
        )
    }

}

export default Stopwatch