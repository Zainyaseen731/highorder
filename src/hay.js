import React from 'react';
import "./haystyle.css";
const Hay = (props) => {
    const pstyle={
        background:"rgb(232, 233, 233)",
    color:"black"
    }
  return (
      <div className="haystyle">
       <div className="container " >
           <h2>Card Image</h2>
           <div className="card" width="400px">
                <img className="card-img-top" src={process.env.PUBLIC_URL+"/tour4.jpg"} alt="Card image" width="130"/>
           <div className="card-body">
           <h4 className="card-title">Rana Zain</h4>
           <p    style={pstyle} >IT-F17A 03400046283</p>
     
          </div>
       </div>
       </div>
       </div>
  );
};

export default Hay;