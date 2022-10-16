import { useState } from 'react'
import axios from 'axios';
//import MenuDropdown from './MenuDropdown';
import Card from './Card.js';

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
           
            <Card 
                foodname={item.title}
                desc={item.description}
                price={item.price}
                />

        </div>)

    const entrees = menu.filter(item => [67, 65, 87, 38, 89].includes(item.id)).map(item => 
        <div>

            <Card 
                foodname={item.title}
                desc={item.description}
                price={item.price}
                />

        </div>)

    const desserts = menu.filter(item => [88, 90, 5, 29, 91].includes(item.id)).map(item =>
        <div>

            <Card 
                foodname={item.title}
                desc={item.description}
                price={item.price}
                />
            
        </div>)
        
    

    return (
        
        <div className="GetMenu">

            <div>
                <p>
                    <button onClick={callAPI} id="button"className="btn" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="side-menu entree-menu dessert-menu">Show Menu</button>
                </p>

                <div className="row text-center">

                    <div className="col text-center">
                        <div className="collapse multi-collapse" id="side-menu">
                            <div className="card card-body">
                                <h1>sides</h1>
                                {sides}
                            </div>
                        </div>
                    </div>

                {/* </div> */}


                {/* <div className="row text-center"> */}

                    <div className="col text-center">
                        <div className="collapse multi-collapse" id="entree-menu">
                            <div className="card card-body">
                                <h1>entrees</h1>
                                {entrees}
                            </div>
                        </div>
                    </div>
                
                {/* </div> */}

                {/* <div className="row text-center"> */}
    
                    <div className="col text-center">
                        <div className="collapse multi-collapse" id="dessert-menu">
                            <div className="card card-body">
                                <h1>desserts</h1>
                                {desserts}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
    )
}
