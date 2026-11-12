import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
    {
        category: "Indoor Plants",
        plants: [
            { name: "Snake Plant", image: "https://example.com/snake.jpg", price: 15 },
            { name: "Peace Lily", image: "https://example.com/lily.jpg", price: 20 },
            { name: "Spider Plant", image: "https://example.com/spider.jpg", price: 12 },
            { name: "ZZ Plant", image: "https://example.com/zz.jpg", price: 25 },
            { name: "Aloe Vera", image: "https://example.com/aloe.jpg", price: 10 },
            { name: "Fern", image: "https://example.com/fern.jpg", price: 18 },
        ],
    },
    {
        category: "Succulents",
        plants: [
            { name: "Echeveria", image: "https://example.com/echeveria.jpg", price: 8 },
            { name: "Jade Plant", image: "https://example.com/jade.jpg", price: 15 },
            { name: "Haworthia", image: "https://example.com/haworthia.jpg", price: 10 },
            { name: "Sedum", image: "https://example.com/sedum.jpg", price: 7 },
            { name: "Kalanchoe", image: "https://example.com/kalanchoe.jpg", price: 12 },
            { name: "Agave", image: "https://example.com/agave.jpg", price: 20 },
        ],
    },
    {
        category: "Flowering Plants",
        plants: [
            { name: "Orchid", image: "https://example.com/orchid.jpg", price: 30 },
            { name: "Rose", image: "https://example.com/rose.jpg", price: 25 },
            { name: "Jasmine", image: "https://example.com/jasmine.jpg", price: 22 },
            { name: "Lavender", image: "https://example.com/lavender.jpg", price: 18 },
            { name: "Begonia", image: "https://example.com/begonia.jpg", price: 15 },
            { name: "Hibiscus", image: "https://example.com/hibiscus.jpg", price: 20 },
        ],
    },
];

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
    };

    const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="product-list">
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/plants">Plants</a>
                <a href="/cart">Cart ({totalCartQuantity})</a>
            </nav>
            {plantsArray.map((category, index) => (
                <div key={index} className="category">
                    <h2>{category.category}</h2>
                    <div className="plants-grid">
                        {category.plants.map((plant, idx) => (
                            <div key={idx} className="plant-card">
                                <img src={plant.image} alt={plant.name} />
                                <h3>{plant.name}</h3>
                                <p>${plant.price}</p>
                                <button 
                                    onClick={() => handleAddToCart(plant)} 
                                    disabled={addedToCart[plant.name]}
                                >
                                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
