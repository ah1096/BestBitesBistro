export default function Card(props){

    return(
        <div>
            <div className="card" >
                <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodcard}</h5>
                        <p className="card-text">insert description here</p>
                        <a href="#" className="btn btn-primary">price</a>
                    </div>
            </div>
        </div>
    )
}