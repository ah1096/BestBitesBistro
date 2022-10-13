import Card from './Card.js';



export default function MenuDropDown() {

    return(

        <div>
                <p>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="side-menu entree-menu dessert-menu">Show Menu</button>
                </p>
                <div className="row">

                <div className="col">
                    <div className="collapse multi-collapse" id="side-menu">
                        <div className="card card-body">
                            <h2>Sides</h2>
                            <p>insert side item cards here</p>   

                                <Card 
                                    foodcard = {'uhhhhh'}


                                    
                                    />

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="collapse multi-collapse" id="entree-menu">
                        <div className="card card-body">
                            <h2>Entrees</h2>
                            <p>insert entree cards here</p>

                                <Card />

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="collapse multi-collapse" id="dessert-menu">
                        <div className="card card-body">
                            <h2>Desserts</h2>
                            <p>insert dessert cards here</p>

                                <Card />
                        </div>
                    </div>
                </div>

                </div>
        </div>
    )
}