import { Link } from "gatsby"
import PropTypes from "prop-types"    
import React from "react"               
                                           
import logo from '../../images/site-logo.png'
                                           
import headerStyle from "./header.module.scss"
                                              
const Header = ({ siteTitle }) => (     
  <header className={ headerStyle.header }>
    <nav id={siteTitle}>                   
      <div >                           
        <img src={logo} alt="Logo" />
      </div>                      
      <ul>                               
        <li>                             
          <Link to="/">Home</Link>      
        </li>                     
        <li>                                  
          <Link to="/services/">Services</Link>
        </li>                     
        <li>                   
          <Link to="/teams/">Teams</Link>
        </li>                  
        <li>                   
          <Link to="/careers">Careers</Link>
        </li>                  
      </ul>                    
      <button className={ headerStyle.contact }>Get in touch</button>
    </nav>                  
  </header>                
)                          
                           
Header.propTypes = {    
  siteTitle: PropTypes.string,
}                   
                  
Header.defaultProps = {
  siteTitle: ``,  
}

export default Header
