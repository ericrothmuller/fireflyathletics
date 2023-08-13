import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import PremiumYogaMat from './pages/product-pages/premium-yoga-mat';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
		<Route path='/contact' element={<Contact/>} />
    <Route path='/shop/premium-yoga-mat' element={<PremiumYogaMat/>} />
	</Routes>
	</Router>
);
}

export default App;