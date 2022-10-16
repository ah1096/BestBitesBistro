import fillercat from './cat-icon.png';


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
                        

                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=348%20e%20main%20street%20lexington%20ky&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe><a href="https://putlocker-is.org">
                                    </a>
                                    <br></br>
                        </div>
                    </div>





                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">about us</h1>
                        <p className="lead">
                                <h2>location</h2>
                                    <p>find us at 348 East Main Street in downtown Lexington. knock twice on the Awesome Inc door, wait for it to be opened, then walk away. repeat this process three (3) times to let us know you're here for Best Bites.</p>
                                <h2>hours</h2>
                                    <p>Mon - Fri: 8am to 8pm</p><br></br>
                                    <p>Saturday (zoomies): 3am - 5am</p><br></br>

                        </p>
                        <h6><em>**all customers entering the premises within ten minutes to closing time will be served two (2) hairballs</em></h6>
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