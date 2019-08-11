// import { link } from "gatsby"
// import PropTyples from "prop-types"
import React from "react"             
import footerStyles from './footer.module.scss'
                                               
const Footer = () => (                     
  <footer className={footerStyles.footer}>        
    This is the footer: © {new Date().getFullYear()}, Built with
    {` `}                                      
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>                                    
)                                              
               
export default Footer
               