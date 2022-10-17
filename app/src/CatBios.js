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
                    <p className="text-center">how about some company? dine with any one of our Best Bites Buddies</p>

                    <CatCard />
                </div>

        </div>
    )
}