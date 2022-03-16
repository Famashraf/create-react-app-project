import React from "react"
export default function NavBar(props){
    
    const [arrow , setArrow]=React.useState({UpDown:false})
    let arrowIcon =arrow.UpDown? "/image/UPArrow.png" : "/image/DownArrow.png"
    
    function toggleArrow() {
    setArrow( prevarrow => {
            return {
                ...prevarrow,
                UpDown :! arrow.UpDown
            }
        })
        
    }
    const styles={
        display:arrow.UpDown?"block":"none"
    }

    return (
        <nav>
            <div className="nav--links">
                <a href="#page">WOMEN</a>
                <a href="#page">MEN  </a>
                <a href="#page">KIDS </a>
            </div>
            <img src="/image/logo.png" alt=""/>
            <div className="nav--img">
            <img src="/image/dollar.png" alt="" />
            <div className="arrow" onClick={toggleArrow}>
            <img src={arrowIcon} alt=""/>
            <div style={styles} className="currency">
                <p>$ USD</p>
                <p>€ EUR</p>
                <p>¥ JPY</p>
            </div>
            </div>
            <img src="/image/EmptyCart.png" alt=""/>
            </div>
        </nav>
    )
}
