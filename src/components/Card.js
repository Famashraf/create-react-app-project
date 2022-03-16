import React from "react"
export default function Card(props){
    // const styles={
    //     position:"absolute",
    //     display:"block",
    //     top:" 275px",
    //     right: "10px",
    //     backgroundColor:" #53d87b",
    //     padding:" 15px",
    //     borderRadius: "50%"
    
    // }
    function cardHover(){
    }
    return(
    <div className="card" onMouseOver={cardHover}>
        <img src={props.img} alt=""/>
        <div Class="card--content">
        <p>{props.productname}</p>
        <p className="price">{props.price}</p>
        {/* <img src="/image/EmptyCart.png" alt="" style={styles}/> */}
        </div>
    </div>
    )
}