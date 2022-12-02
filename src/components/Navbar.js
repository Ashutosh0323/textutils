
import React from 'react'

export default function Navbar(props) {
  return (
        // <>
    // <h1> this is me</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a 
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // </>
    // <>

    // </>
    // <>
    // <nav>
    //      <li>Home</li>
    //      <li>About</li>
    //      <li>Contract</li>
    //      <li>Login</li>
    // </nav>
    // <div className='container'>
    //   <h1>Hello{name}</h1>
    //   <p>
    //        Loremfffffffffffffffffffffffffffffffffff
    //        ashieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    //        asohiadddddddddddddddddddddddddddddd
    //        askaisggggggggggggggggggggggggg

    //   </p>
    // </div>
    // </>
  // <div className='blank'>Lovely</div>
  <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.abouttext}</a>
        </li>
        </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary " type="submit">Search</button>
      </form>  */}
      <div className={`form-check form-switch text- ${props.Mode==='light'?'dark':'light'}`}>
  <input className="form-check-input my-4 mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label  my-4 mx-3" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
</>
    
  )
}
