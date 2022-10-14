import fillercat from './cat-icon.png';
import CatCard from './CatCard.js';

const image = {
    name: 'image',
    imageUrl: fillercat,
    imageSize: 200,
  };

export default function CatBios(){
    return(
        <div>
      

                <div>
                    <h1 className="text-center">buddies</h1>
                    <p className="text-center">here's a bunch of cats</p>

                    <CatCard />
                </div>

        </div>
    )
}