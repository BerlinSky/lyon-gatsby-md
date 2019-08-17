import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
                                         
import styles from "./posts.module.scss" 
                                         
export default ({ data }) => {          
  const post = data.markdownRemark    
  return (                            
    <Layout>                          
      <div className={ styles.main }>                  
        <h1>{post.frontmatter.title}</h1>
        <div className={ styles.mdContent }  dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>                         
    </Layout>                       
  )                                
}                                 
                                 
export const query = graphql`  
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html         
      frontmatter {
        title
      }
    }  
  }    
`      