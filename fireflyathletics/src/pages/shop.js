import React from 'react';
import logo from '../logo.svg';
import falogo from '../images/Firefly-Athletics-Logo.png';

const Shop = () => {
return (
	<main className="pageHeadingDiv">
	<h1 className="pageTitle">Shop Firefly Athletics</h1>
        <div className="productDiv">
        <div className="product">
            <h2>Premium Yoga Mat</h2>
        <img src={falogo} className="singleProduct" alt="logo" />
        <p><button className="shopButton">Shop</button></p>
        </div>
        <div className="product">
            <h2>Lightweight Yoga Mat</h2>
            <img src={falogo} className="singleProduct" alt="logo" />
            <p><button className="shopButton">Shop</button></p>
            </div>
        <div className="product">
            <h2>Yoga Blocks</h2>
            <img src={falogo} className="singleProduct" alt="logo" />
            <p><button className="shopButton">Shop</button></p>
        </div>
        <div className="product">
            <h2>Resistance Bands</h2>
            <img src={falogo} className="singleProduct" alt="logo" />
            <p><button className="shopButton">Shop</button></p>
        </div>
    </div>
	</main>
);
};

export default Shop;