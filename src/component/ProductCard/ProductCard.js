import "./ProductCard.css"
import React from "react";


 const ProductCard = ({name, emoji, price, bgColor}) => {
    return(
        <div className='product-card' style={{backgroundColor:bgColor}}>
            <h2>{name} <span className="emoji">{emoji}</span></h2>
    
            <h3 className="product-price"> RS:{price}</h3>
            </div>
    
   )
}
export default ProductCard