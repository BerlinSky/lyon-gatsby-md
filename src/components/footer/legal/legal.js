import { Link } from "gatsby"
import React from "react"
import legaStyles from "./legal.module.scss"

const FooterLegal = () => (
  <section className={legaStyles.legal}>
    <ul className={legaStyles.list}>
      <li>                        
        <Link to="#">Terms &amp; Conditions</Link>
      </li>  
      <li>   
        <Link to="#">Privacy Policy</Link>
      </li>  
      <li>&copy; 2019 Copyright Nowrap Inc.</li>
    </ul>    
  </section> 
)            
             
export default FooterLegal
