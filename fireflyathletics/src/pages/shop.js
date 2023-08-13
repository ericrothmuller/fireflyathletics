import React from 'react';
import falogo from '../images/Firefly-Athletics-Logo.png';

const Shop = () => {
return (
	<main className="pageHeadingDiv">
	<h1 className="pageTitle">Shop Firefly Athletics</h1>
        <div className="productDiv">
        <div className="singleProduct">
            <h2>Premium Yoga Mat</h2>
        <img src={falogo} className="singleProductImage" alt="logo" />
        <p><a href="/shop/premium-yoga-mat"><button className="productButton">Shop</button></a></p>
        </div>
        <div className="singleProduct">
            <h2>Lightweight Yoga Mat</h2>
            <img src={falogo} className="singleProductImage" alt="logo" />
            <p><a href="/shop/lightweight-yoga-mat"><button className="productButton">Shop</button></a></p>
            </div>
        <div className="singleProduct">
            <h2>Yoga Blocks</h2>
            <img src={falogo} className="singleProductImage" alt="logo" />
            <p><button className="productButton">Shop</button></p>
        </div>
        <div className="singleProduct">
            <h2>Resistance Bands</h2>
            <img src={falogo} className="singleProductImage" alt="logo" />
            <p><button className="productButton">Shop</button></p>
        </div>
    </div>
	</main>
);
};

export default Shop;