import fillercat from './cat-icon.png';


export default function Navbar () {
   return ( 
        <div>
            
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={fillercat} alt="placeholder cat" className="headerIcon"></img>
        
        best BITES bistro</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">'bout</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">bites</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">buddies</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">buy</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>



        </div>
    )
}