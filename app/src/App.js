import './App.css';
import Homepage from "./Homepage.js";
import Aboutpage from "./Aboutpage.js";
import CatBios from "./CatBios.js";
import { useState } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default function App(){

    const [page, setPage] = useState('home')

    return (
        <div>
            <Navbar uhhhh={setPage}/>

                {page === 'home' && <Homepage />}
                {page === 'about' && <Aboutpage />}
                {page === 'catbios' && <CatBios />}

            <Footer />
    
        </div>

    )

}
