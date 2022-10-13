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


    const menuItems = menu.filter(item => [1, 7, 10].includes(item.id)).map(item => <li>{item.title}{item.id}</li>)

    

    return (
        <div className="GetMenu">

        <ul>{menuItems}</ul>
        <button onClick={callAPI}>Get Menu</button>
          
        </div>
    );
}