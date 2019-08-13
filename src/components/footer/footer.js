// import { Link } from "gatsby"
// import PropTyples from "prop-types" 
import React from "react"        
import footerStyles from "./footer.module.scss"
                                
import FooterSocial from "./social/social"
import FooterLegal from "./legal/legal"  
                                         
const Footer = () => (                 
  <footer className={footerStyles.footer}>
    <FooterSocial></FooterSocial>      
    <FooterLegal></FooterLegal>        
  </footer>                        
)                                
                   
export default Footer
                   