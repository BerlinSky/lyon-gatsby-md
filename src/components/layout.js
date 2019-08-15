import React from "react"
import PropTypes from "prop-types"    
import { useStaticQuery, graphql } from "gatsby"
                                      
import Header from "./header/header"
import Footer from "./footer/footer"

import layoutStyles from "./layout.module.scss"
                          
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {                                  
        siteMetadata {                        
          title                                 
        }                                      
      }                                       
    }                                        
  `)                                        
                                           
  return (                                 
    <section className={layoutStyles.layout}>
      <div className={layoutStyles.container}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={layoutStyles.main}>                          
          {children}                      
        </main>                         
        <Footer />                 
      </div>                       
    </section>                   
  )                             
}                              
                            
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
