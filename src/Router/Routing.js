import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Service from '../Pages/Service';
import Review from '../Pages/Review';
import Contact from '../Pages/Contact';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/review' element={<Review />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;