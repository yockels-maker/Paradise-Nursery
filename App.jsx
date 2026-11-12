import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AboutUs from './AboutUs';

function App() {
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStarted = () => {
        setShowProductList(true);
    };

    return (
        <div className="App">
            {!showProductList ? (
                <div className="background-image">
                    <h1>Welcome to Paradise Nursery</h1>
                    <button className="get-started-button" onClick={handleGetStarted}>Get Started</button>
                    <AboutUs />
                </div>
            ) : (
                <ProductList />
            )}
        </div>
    );
}

export default App;
