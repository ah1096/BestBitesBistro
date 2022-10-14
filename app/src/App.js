import './App.css';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import GetMenu from "./GetMenu.js";
import Homepage from "./Homepage.js";
import Aboutpage from "./Aboutpage.js";
import CatBios from "./CatBios.js";

//import { useState } from 'react';





export default function App(){

    // const [page, setPage] = useState('home')

    // {page === 'home' && }
    // {page === 'about' && }
    // {page === 'menu' && }
    // {page === 'catbios' && }
    // {page === 'buy' && }


    return (
        <div>
            <Navbar />
                <div>
                    <h1>
                        insert page content here
                    </h1>
                    <GetMenu />
                </div>
            <Footer />
            <Homepage />
            <Aboutpage />
            <CatBios />
        </div>

    )

}
