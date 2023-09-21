import "./Product.css";

import Navbar from "../../component/Navbor/Navbar";
import ProductCard from "../../component/ProductCard/ProductCard";
import { useState } from "react";

export default function Home() {
    const [products, setProducts] =useState([
       {
        name: "Mango",
        emoji: "🥭",
        price: 100,
        bgColor: "#FFC107"
       },
       
       {
        name: "Apple",
        emoji: "🍎",
        price: 50,
        bgColor: "#F44336"
       },
       {
        name: "Banana",
        emoji: "🍌",
        price: 50,
        bgColor: "#FFEB3B"
       },
       {
        name: "Pineapple",
        emoji: "🍍",
        price: 200,
        bgColor: "#4CAF50"
       },
       {
        name: "Grapes",
        emoji: "🍇",
        price: 40,
        bgColor: "#9C27B0"
       },

    ]);
    return (
        <>
            <Navbar />

            <h1 style={{textAlign:"center"}}>Fruits Card</h1>
             
             <div className="flex-box">
             {
                products.map((productInfo)=>{
                    const {name, emoji, price ,bgColor} = productInfo;
                    return <ProductCard name={name} emoji={emoji} price={price} bgColor={bgColor}/>
                })   
            }

             </div>
      </>
    )
}
