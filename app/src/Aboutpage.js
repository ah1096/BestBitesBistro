import Navbar from './Navbar.js';
import fillercat from './cat-icon.png';
import Footer from './Footer.js';

const image = {
    name: 'image',
    imageUrl: fillercat,
    imageSize: 200,
  };

export default function Aboutpage(){
    return(
        <div>
    
                <div className="px-4 py-5 my-5 text-center">
                

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse  g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img className="d-block mx-lg-auto img-fluid" 
                            loading="lazy" 
                            alt="placeholder cat" 
                            src= {image.imageUrl}
                            style={{
                                width: image.imageSize,
                                height: image.imageSize
                                }}
                    ></img>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">about us</h1>
                        <p className="lead">This is the about page, and this paragraph is information that tells you things.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
                        {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                        </div>
                    </div>
                    </div>
                </div>

                </div>
          
        </div>
    )
}