import React from "react";


function Cart(prop) {
    return (
      <div >
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 col-12"  style={{border: "1px solid black",backgroundColor:"#1B1464", padding:"2%"}}>
                  <img src={prop.tempData.image} alt="search song" width="50%" />
                
                  <p style={{color:"white"}}>{prop.tempData.title}</p>
                  <p style={{color:"orange"}}>{prop.tempData.music}</p>
            </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Cart;