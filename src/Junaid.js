import React,{Component} from "react";
import Arrmy from "./Hoc";
class Junaid extends Component{
    render(){
        const btColor={
            color:'black',
            backgroundColor:'orange'
        };
        
        return (
            <div>
           <h2>Camp:{this.props.camp}</h2>
            
            <h2 onMouseOver={this.props.hochandler} >
                Junaid {this.props.hocgunname}
                 Gunshots:{this.props.hocshot}
                 </h2>
            </div>
        )
    }
}
export default Arrmy(Junaid,20);