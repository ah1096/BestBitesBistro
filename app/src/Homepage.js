import fillercat from './cat-icon.png';


const image = {
    name: 'image',
    imageUrl: fillercat,
    imageSize: 200,
  };

export default function Homepage(){
    return(
        <div>
         
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
                    <p className="lead">welcome to Best Bites Bistro, a cat cafe! here at Best Bites, you can dine with one of our Best Bites Buddies! we've got cats of all stripes -- sweet AND spicy --  so be sure to keep an eye on both your fingers and your food!</p>
                        <h6><em>**best bites bistro accepts no responsibility for cat-related injuries sustained while dining with spicy Buddies</em></h6>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" id="button" className="btn btn-lg px-4 gap-3">get bit</button>
                            </div>
                    </div>

                </div>
          
    </div>

    )
}