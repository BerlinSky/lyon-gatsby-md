import React from "react"
import PropTypes from "prop-types"    
import { useStaticQuery, graphql } from "gatsby"
                                      
import Header from "./header/header"
import Footer from "./footer/footer"

import "../sass/main.scss"
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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
