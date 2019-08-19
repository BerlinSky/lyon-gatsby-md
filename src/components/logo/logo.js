import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
                              
const Logo = () => {                                                   
  const data = useStaticQuery(graphql`                                  
    query {                                                        
      logoImage: file(relativePath: { eq: "site-logo.png" }) {
        childImageSharp {                                         
          fluid(maxWidth: 100) {                                  
            ...GatsbyImageSharpFluid                             
          }                                                     
        }                                                     
      }                                                       
    }                                                        
  `)                                                        
                                                            
  return <Img fluid={data.logoImage.childImageSharp.fluid} />
}                                                 
                                                  
export default Logo                       
                                   