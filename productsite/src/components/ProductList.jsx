import {useState} from 'react';
import ProductCard from './ProductCard';

function ProductList() {
    let stateArray=useState(
    {
        product1: {name:"Laptop", price:99999},
        product2: {name:"Smartphone", price:69999},
        product3: {name:"Tablet", price:49999},
        product4: {name:"Smartwatch", price:1999}
    });
    let products=stateArray[0];
    
    return (
        <div>
            <ProductCard name={products.product1.name} price={products.product1.price} />
            <ProductCard name={products.product2.name} price={products.product2.price} />
            <ProductCard name={products.product3.name} price={products.product3.price} />
            <ProductCard name={products.product4.name} price={products.product4.price} />
        </div>
    );
}

export default ProductList;
