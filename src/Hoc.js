import React,{Component} from "react";
const Arrmy=(Man,count)=>{
class Hoc extends Component{
    state={
        gunshot:0
    };

    handler=()=>{
        this.setState({gunshot: this.state.gunshot + count});
    }; 
    render(){       
        return(
            <Man hocgunname="AK47" 
            hocshot={this.state.gunshot}
             hochandler={this.handler}
             {...this.props}/>
        )  
    }
}
return Hoc
}
export default Arrmy;