import smudge from './kitties/cat_smudge.png';


const image = {
    name: 'image',
    imageUrl: smudge,
    imageSize: 200,
  };

  export default function CatCard() {

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img className="img-fluid rounded-circle" 
                        loading="lazy" 
                        alt="placeholder cat" 
                        src= {image.imageUrl}
                        style={{
                            width: image.imageSize,
                            height: image.imageSize
                            }}
                    ></img>
                </div>
                                    
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Smudge</h5>
                        <p className="card-text">sald,,</p>
                        <p className="card-text">
                            <small className="text-muted">Spicy level: 🌶🌶</small></p>
                    </div>
                </div>
            </div>
        </div>)
  }