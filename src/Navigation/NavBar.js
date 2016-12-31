import React from 'react'
import { Link } from 'react-router'
import './NavBar.css'
import logo from '../images/BLV-logo.png'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem, Image} from 'react-bootstrap'

const NavBar = (props) => (
  <div className='container-fluid'>
    <div style={{minHeight: '50px', padding: '10px 30px'}}><a href='#' ><Image style={{ width: '100%', maxWidth: '370px'}} src={ logo } responsive /></a></div>
    <Navbar collapseOnSelect style={{margin: '0'}}>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey='1' title='About' id='basic-nav-dropdown'>
            <MenuItem eventKey='1.1'><Link to='/about'><div>Who We Are</div></Link></MenuItem>
            <MenuItem eventKey='1.2'><Link to='/our-team'><div>Our Team</div></Link></MenuItem>
          </NavDropdown>
          <NavDropdown eventKey='2' title='What We Do' id='basic-nav-dropdown'>
            <MenuItem eventKey='2.1'><Link to='/free-book-library'><div>Free Book Library</div></Link></MenuItem>
            <MenuItem eventKey='2.2'><Link to='/scholarship'><div>Scholarship</div></Link></MenuItem>
            <MenuItem eventKey='2.2'><Link to='/job-assistance'><div>Job Assistance</div></Link></MenuItem>
          </NavDropdown>
          <NavDropdown eventKey='3' title='Responsible Tourism' id='basic-nav-dropdown'>
            <MenuItem eventKey='3.1'><Link to='/tour-for-book'><div>Tour For Book</div></Link></MenuItem>
            <MenuItem eventKey='3.2'><Link to='/voluntourism'><div>Voluntourism</div></Link></MenuItem>
          </NavDropdown>
          <NavItem eventKey='4' title='Contact'>Contact</NavItem>
          <NavItem eventKey='5' title='Donate' className="donateButton">❤ Donate</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div>
      {props.children}
    </div>
  </div>
)
const {
  element
} = React.PropTypes

NavBar.propTypes = {
  children: element.isRequired
}
export default NavBar
