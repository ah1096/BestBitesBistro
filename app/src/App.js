import './App.css';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import GetMenu from "./GetMenu.js";
//import Card from "./Card.js";
import MenuDropdown from "./MenuDropdown";

export default function App(){
    return (
        <div>
            <Navbar />
                <div>
                    <h1>
                        insert page content here
                    </h1>
                    <GetMenu />
                    <MenuDropdown />
                    
                </div>
            <Footer />
        </div>
    )
}
