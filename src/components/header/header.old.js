import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
                         
import headerStyle from "./header.module.scss"
                                              
const Header = ({ siteTitle }) => (
  <header className={headerStyle.header}>
    <h1 style={{ margin: 0 }}>     
      <Link to="/" className={headerStyle.header}>
        {siteTitle}               
      </Link>                    
      <ul>                      
        <li>                   
          <Link to="/posts/">Posts</Link>
        </li>               
      </ul>         
    </h1>           
  </header>     
)                    
                    
Header.propTypes = {
  siteTitle: PropTypes.string,
}                  
                 
Header.defaultProps = {
  siteTitle: ``,
}               
              
export default Header
          