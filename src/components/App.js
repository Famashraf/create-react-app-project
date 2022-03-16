import React from "react"
import Card from "./Card"
import NavBar from "./NavBar"
export default function App(){
    return (
        <div className="container">
            <NavBar />
            <h1>Category name</h1>
            <div className="card--container">
            <Card 
            img="/image/product-1.png"
            productname="Apollo Running Short"
            price="$50.00"
            />
            <Card 
            img="/image/product-2.png"
            productname="Apollo Running Short"
            price="$50.00"
            />
            <Card 
            img="/image/product-3.png"
            productname="Apollo Running Short"
            price="$50.00"
            />
            <Card 
            img="/image/product-4.png"
            productname="Apollo Running Short"
            price="$50.00"
            />
            <Card 
            img="/image/product-1.png"
            productname="Apollo Running Short"
            price="$50.00"
            />
            <Card 
            img="/image/product-3.png"
            productname="Apollo Running Short"
            price="$50.00"
            />
            </div>
        </div>
    )
}
