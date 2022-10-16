import fillercat from './cat-icon.png';


export default function Navbar (props) {



  const headerImage = {
    name: 'headerImage',
    imageUrl: fillercat,
    imageSize: 40,
  };

   return ( 
        <div>
            
            <nav className="navbar navbar-expand-lg" id="navbar">
  <div className="container-fluid">

    <a className="navbar-brand" onClick={() => props.uhhhh('home')} aria-current="page" href="#">
    <img 
        src={headerImage.imageUrl} 
        alt="placeholder cat" 
        className="headerIcon"
        style={{
          width: headerImage.imageSize,
          height: headerImage.imageSize
        }}
        ></img>
      </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a onClick={() => props.uhhhh('about')} className="nav-link" href="#">'bout</a>
        </li>

        <li className="nav-item">
          <a onClick={() => props.uhhhh('menu')} className="nav-link" href="#">bites</a>
        </li>

        <li className="nav-item">
          <a onClick={() => props.uhhhh('catbios')} className="nav-link" href="#">buddies</a>
        </li>
        
        <li className="nav-item">
          <a onClick={() => props.uhhhh('merch')} className="nav-link" href="#">buy</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>



        </div>
    )
}