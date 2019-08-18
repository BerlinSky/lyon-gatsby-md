import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"               
                                        
import headerStyle from "./header.module.scss"
                                              
const Header = ({ siteTitle }) => (     
  <header className={ headerStyle.header }>
    <nav id={siteTitle}>                 
      <h2 >LOGO</h2>                     
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
        <li>                   
          <Link to="/contacts">Contacts</Link>
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
