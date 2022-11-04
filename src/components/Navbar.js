import React from 'react'

export default function Navbar(props) {
  return (
  
    <>
    
    <nav className="navbar navbar-expand"
      style={{backgroundColor: props.navbar_background}}
    >
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.website_name_nav}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"  >
                        <a className="nav-link active" aria-current="page" href="/" style={{backgroundColor: "#FFFFFFF"}}>HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{backgroundColor: "#FFFFFFF"}}>OUR VALUE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{backgroundColor: "#FFFFFFF"}}>INDUSTRIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">SYSTEM DEVELOPMENT LIFE CYCLE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">PARTNERSHIP MODEL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">CLIENTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">CONTACT US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">CAREERS</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Something else here</a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
        </div>
    </nav>


    
    
    </>
  
  
  
  
  )
}
