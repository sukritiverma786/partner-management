import React, {useState} from 'react'

const Navbar = () => {

    const[show ,setShow] = useState(false);
    return (
        <>
        <section className="navbar-bg">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div className="row">
  <div className="col-12 col-sm-4 col-lg-7 ms-auto d-flex ">
                        <img src="./image/logo.png" alt="heroimg" className="image-fluid" />                        
                        </div>
  
  </div>
  <div className=" col-sm-8 col-lg-5 navbar-right ms-auto d-flex justify-content-center align-items-center">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">BLOG</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">EMPLOYMENT AND INCOME VERIFICATION</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">LOGOUT</button>
      </form>
    </div>
    </div>
    </div>
</nav>  
</section>
        </>
    )
}

export default Navbar
