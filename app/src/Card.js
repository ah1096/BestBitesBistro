import him from './foodpics/him.jpg';

export default function Card(props){


//figure out how to change this to each individual food image
    const foodpic = {
        name: 'foodpic',
        imageUrl: him,
        imageSize: 200,
      };

    const cardstyles = {
        name: 'cardstyle',
        cardWidth: 250,
    }



    return(
        <div>
            <div className="card" 
            style={{
                width: cardstyles.cardWidth,
                }}>
                    
                <img 
                    src={foodpic.imageUrl} 
                    alt="wha???" 
                    className="headerIcon"
                    style={{
                    width: foodpic.imageSize,
                    height: foodpic.imageSize
                    }}
                ></img>

                    <div className="card-body">
                        <h5 className="card-title">{props.foodname}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href="#" className="btn btn-primary">${props.price}</a>
                    </div>
            </div>
        </div>
    )
}