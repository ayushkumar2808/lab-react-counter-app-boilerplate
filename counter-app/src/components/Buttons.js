import React,{Component} from "react";

class Counter extends Component{

    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    increase(){
        this.setState({
            count:this.state.count +1
        })

    }
    decrease(){
        this.setState({
            count:this.state.count-1
        })
    }
    reset(){
        this.setState({
            count:0
        })
    }
    plusten(){
        this.setState({
            count:this.state.count+10
        })
    }
    minusten(){
        this.setState({
            count:this.state.count-10
        })
    }



    render(){
        return(
            <>
            <h1>Counter</h1>
            <div id='counter'>{this.state.count}</div>
            <div id="display-flex">
                <button onClick={()=>this.increase()} className="buttons">+</button>
                <button onClick={()=>this.decrease()} className="buttons">-</button>
                <button onClick={()=>this.reset()} className="buttons">Reset</button>
                <button onClick={()=>this.plusten()}className="buttons">+10</button>
                <button onClick={()=>this.minusten()}className="buttons">-10</button>
            </div>
            </>
        )
    }
}

export default Counter