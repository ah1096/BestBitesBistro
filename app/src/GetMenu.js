import { useState } from 'react'
import axios from 'axios';

export default function GetMenu() {
    const [menu, setMenu] = useState([])
    const callAPI = () => {
        axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
        .then(response => {
            console.log(response.data)
            setMenu(response.data)
        }).catch(error =>{
            console.log(error)
        })
    
    }


    const sides = menu.filter(item => [66, 51, 74, 17, 16].includes(item.id)).map(item => 
        <div>
            <li>{item.title}.....${item.price}</li>
        </div>)

    const entrees = menu.filter(item => [67, 65, 87, 38, 89].includes(item.id)).map(item => 
        <div>
            <li>{item.title}.....${item.price}</li>
        </div>)

    const desserts = menu.filter(item => [88, 90, 5, 29, 91].includes(item.id)).map(item =>
        <div>
            <li>{item.title}.....${item.price}</li>
        </div>)
        
    

    return (
        <div className="GetMenu">

        <ul>{sides}</ul>
        <ul>{entrees}</ul>
        <ul>{desserts}</ul>
        
        <button onClick={callAPI}>Get Menu</button>
          
        </div>
    );
}