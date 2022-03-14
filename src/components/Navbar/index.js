import React from 'react'
import { Nav,
     NavLink, 
     NavMenu, 
     Bars 
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav> 
        <NavLink to  ="/">
            HK
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/experience" activeStyle>
                Experience
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact
            </NavLink>
            <NavLink to="/resume" activeStyle>
                Resume
            </NavLink>
        </NavMenu>
    </Nav>
  )
}

export default Navbar