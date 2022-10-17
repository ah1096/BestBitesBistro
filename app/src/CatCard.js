import smudge from './kitties/cat_smudge.png';
import abel from './kitties/cat_Abel.jpg';
import boo from './kitties/cat_Boo.jpg';
import cheshire from './kitties/cat_Cheshire.jpg';
import fugu from './kitties/cat_Fugu.jpg';
import hyde from './kitties/cat_Hyde.jpg';
import jackie from './kitties/cat_Jackie.jpg';
import lilyMae from './kitties/cat_Lily-Mae.jpg';
import obi from './kitties/cat_Obi.jpg';
import ollie from './kitties/cat_Ollie.jpg';
import oscar from './kitties/cat_Oscar.jpg';
import sushi from './kitties/cat_Sushi.jpg';
import wayland from './kitties/cat_Wayland.jpeg';
import woody from './kitties/cat_Woody.jpg';



const image = {
    name: 'image',
    imageUrl: smudge,
    imageSize: 200,
  };

  const abelCat = {
    name: 'abel',
    imageUrl: abel,
    imageSize: 200,
  };

  const booCat = {
    name: 'boo',
    imageUrl: boo,
    imageSize: 200,
  };

  const cheshireCat = {
    name: 'cheshire',
    imageUrl: cheshire,
    imageSize: 200,
  };

  const fuguCat = {
    name: 'fugu',
    imageUrl: fugu,
    imageSize: 200,
  };

  const hydeCat = {
    name: 'hyde',
    imageUrl: hyde,
    imageSize: 200,
  };

  const jackieCat = {
    name: 'jackie',
    imageUrl: jackie,
    imageSize: 200,
  };

  const lilyMaeCat = {
    name: 'lilyMae',
    imageUrl: lilyMae,
    imageSize: 200,
  };

  const obiCat = {
    name: 'obi',
    imageUrl: obi,
    imageSize: 200,
  };

  const ollieCat = {
    name: 'ollie',
    imageUrl: ollie,
    imageSize: 200,
  };

  const oscarCat = {
    name: 'oscar',
    imageUrl: oscar,
    imageSize: 200,
  };

  const sushiCat = {
    name: 'sushi',
    imageUrl: sushi,
    imageSize: 200,
  };

  const waylandCat = {
    name: 'wayland',
    imageUrl: wayland,
    imageSize: 200,
  };

  const woodyCat = {
    name: 'woody',
    imageUrl: woody,
    imageSize: 200,
  };








  export default function CatCard(props) {

    return (

<div>
        <div className="card mb-3" id="catcard">
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
                        <p className="card-text">[insert description here]</p>
                        <p className="card-text">
                            <small className="text-muted">Spicy level: 🌶🌶</small></p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {abelCat.imageUrl}
                    style={{
                        width: abelCat.imageSize,
                        height: abelCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Abel</h5>
                    <p className="card-text">[insert description here]</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: ??</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {booCat.imageUrl}
                    style={{
                        width: booCat.imageSize,
                        height: booCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Boo</h5>
                    <p className="card-text">spoiled rotten. skilled at boundary-setting. best quality: her big ole eyes</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: 🍰</small></p>
                </div>
            </div>
        </div>
    </div>
        
    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {cheshireCat.imageUrl}
                    style={{
                        width: cheshireCat.imageSize,
                        height: cheshireCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Cheshire</h5>
                    <p className="card-text">[insert description here]</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: ??</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {hydeCat.imageUrl}
                    style={{
                        width: hydeCat.imageSize,
                        height: hydeCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Hyde</h5>
                    <p className="card-text">a very mean boi</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: ??</small></p>
                </div>
            </div>
        </div>
    </div>
        
    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {fuguCat.imageUrl}
                    style={{
                        width: fuguCat.imageSize,
                        height: fuguCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Fugu</h5>
                    <p className="card-text">50% monkey, 50% rat, 100% naked.</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: 🌶🌶🌶</small></p>
                </div>
            </div>
        </div>
    </div>
        
    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {jackieCat.imageUrl}
                    style={{
                        width: jackieCat.imageSize,
                        height: jackieCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Jackie</h5>
                    <p className="card-text">not a single thought can be found within a 2 kilometer radius of her. she has also been found at multiple crime scenes</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: 🌶🌶🌶</small></p>
                </div>
            </div>
        </div>
    </div>
        
    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {lilyMaeCat.imageUrl}
                    style={{
                        width: lilyMaeCat.imageSize,
                        height: lilyMaeCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Lily Mae</h5>
                    <p className="card-text">all she wants out of life is to cuddle, albeit only on her terms. will nuzzle you all day long but does not like to be touched. has surprisingly astute home health abilities</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: 🍰</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {obiCat.imageUrl}
                    style={{
                        width: obiCat.imageSize,
                        height: obiCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Obi</h5>
                    <p className="card-text">chaotic neutral</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: ??</small></p>
                </div>
            </div>
        </div>
    </div>  
        
    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {ollieCat.imageUrl}
                    style={{
                        width: ollieCat.imageSize,
                        height: ollieCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Oliver Wendell Holmes, aka "Ollie"</h5>
                    <p className="card-text">generally a cuddler but when he's done, he's done. will bite your nose without warning but seems to mean for it to be an affectionate thing.</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: 🌶🌶🌶</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {oscarCat.imageUrl}
                    style={{
                        width: oscarCat.imageSize,
                        height: oscarCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Oscar</h5>
                    <p className="card-text">[insert description here]</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: ??</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {sushiCat.imageUrl}
                    style={{
                        width: sushiCat.imageSize,
                        height: sushiCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Sushi</h5>
                    <p className="card-text">likes to eat, sleep, and bite</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: ??</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {waylandCat.imageUrl}
                    style={{
                        width: waylandCat.imageSize,
                        height: waylandCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Wayland</h5>
                    <p className="card-text">a very efficent hunter. loves cuddles.</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: 🍰</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" id="catcard">
        <div className="row g-0">
            <div className="col-md-4">
            <img className="img-fluid rounded-circle" 
                    loading="lazy" 
                    alt="placeholder cat" 
                    src= {woodyCat.imageUrl}
                    style={{
                        width: woodyCat.imageSize,
                        height: woodyCat.imageSize
                        }}
                ></img>
            </div>
                                
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Woodrow Wilson, aka "Woody"</h5>
                    <p className="card-text">a good candidate for poster child for why cat names should be mutable for up to one year following assignment, because he cares little to nothing for the cause of world peace. picks battles wildly disproportionate to his personal size.</p>
                    <p className="card-text">
                        <small className="text-muted">Spicy level: 🌶🌶🌶🌶🌶🔥</small></p>
                </div>
            </div>
        </div>
    </div>
        
        
        
        
    </div>)
  }