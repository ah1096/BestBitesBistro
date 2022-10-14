import Navbar from './Navbar.js';
import fillercat from './cat-icon.png';
import Footer from './Footer.js';

const image = {
    name: 'image',
    imageUrl: fillercat,
    imageSize: 200,
  };

export default function Homepage(){
    return(
        <div>
            <Navbar />
                <div className="px-4 py-5 my-5 text-center">
                    
                    <img
                        className="d-block mx-auto mb-4" 
                        alt="placeholder cat" 
                        src= {image.imageUrl}
                        style={{
                            width: image.imageSize,
                            height: image.imageSize
                            }}
                    ></img>

                    <h1 className="display-5 fw-bold">best BITES bistro</h1>

                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">come get y'all juice</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">see our menu</button>
                            </div>
                    </div>

                </div>
            <Footer />
    </div>

    )
}