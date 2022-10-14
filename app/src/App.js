import './App.css';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import GetMenu from "./GetMenu.js";

import { useState } from 'react';




export default function App(){
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
        </div>
    )
}
