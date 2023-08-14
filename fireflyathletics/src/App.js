import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import PremiumYogaMat from './pages/product-pages/premium-yoga-mat';
import LightweightYogaMat from './pages/product-pages/lightweight-yoga-mat';
import YogaBlocks from './pages/product-pages/yoga-blocks';
import ResistanceBands from './pages/product-pages/resistance-bands';
import YogaMatCarryingStrap from './pages/product-pages/yoga-mat-carrying-strap';

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
    <Route path='/shop/lightweight-yoga-mat' element={<LightweightYogaMat/>} />
    <Route path='/shop/yoga-blocks' element={<YogaBlocks/>} />
    <Route path='/shop/resistance-bands' element={<ResistanceBands/>} />
    <Route path='/shop/yoga-mat-carrying-strap' element={<YogaMatCarryingStrap/>} />
	</Routes>
	</Router>
);
}

export default App;