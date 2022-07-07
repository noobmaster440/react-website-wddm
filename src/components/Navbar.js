import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button";
import '../index.css'
const Navbar = () => {
  const [click, setClick]=useState(false);
  const [button, setButton]=useState(true);

  const handleClick=()=>{
    console.log("test 1")
    setClick(!click)  
  }
  const closeMenu=()=>{
    setClick(false)
  }
  return (
    <div>
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to='/' className="navbar-logo">
                Kunco <i className="fab fa-typo3"/>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
              <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMenu}></Link>
                Home
              </li>
              <li className="nav-item">
                <Link to='/aboutus' className='nav-links' onClick={closeMenu}></Link>
                About US
              </li>
              <li className="nav-item">
                <Link to='/whysave' className='nav-links' onClick={closeMenu}></Link>
                Why Save Bees?
              </li>
              <li className="nav-item">
                <Link to='/contact' className='nav-links' onClick={closeMenu}></Link>
                Contact
              </li> 
              <li>
                <Link to='/sign-up' className="nav-links-sm" onClick={closeMenu}></Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </nav>
        </>
    </div>
  )
}
export default Navbar