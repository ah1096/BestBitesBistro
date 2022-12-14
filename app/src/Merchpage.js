import shirts from './merch/bothshirts.png';



const shirtMerch = {
    name: 'shirts',
    imageUrl: shirts,
    imageHeight: 300,
    imageWidth: 600,
  };

export default function Merchpage(){
    return(
        <div>
    
                <div className="px-4 py-5 my-5 text-center">

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse  g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img className="d-block mx-lg-auto img-fluid" 
                            loading="lazy" 
                            alt="a white t-shirt that says frick birds, all my homies hate birds" 
                            src= {shirtMerch.imageUrl}
                            style={{
                                width: shirtMerch.imageWidth,
                                height: shirtMerch.imageHeight
                                }}
                    ></img>

                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">buy a shirt</h1>
                        <p className="lead">allergic to cats, but still want to support a local business? grab some limited-edition Best Bites merch!</p>
                        <h6><em>10% of proceeds from shirt sales go to Keep Cats Outdoors, part of the Birds Aren't Real awareness campaign.</em></h6>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button id="button" type="button" className="btn btn-lg px-4 me-md-2">gimme</button>
                        <button id="button2" type="button" className="btn btn-outline-secondary btn-lg px-4">
                            <a href="https://ah1096.github.io/structuring-content/">
                            the what campaign?
                            </a></button>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
          
        </div>
    )
}