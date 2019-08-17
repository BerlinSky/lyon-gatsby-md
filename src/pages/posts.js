import React from "react"
import { Link, graphql } from "gatsby"
                                                      
import Layout from "../components/layout"

const PostsPage = ({ data }) => (        
  <Layout>                              
    <div>          
      <h1>Hi from the posts page</h1>    
      <p>Welcome to Posts</p>          
      <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
                                   
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>       
          <Link to={node.fields.slug}>    
            <h3>                 
              {node.frontmatter.title}{" "}
              <span>     
                — {node.frontmatter.date}
              </span>    
            </h3>        
            <p>{node.excerpt}</p>
          </Link>        
        </div>           
      ))}                
    </div>               
  </Layout>                                           
)                                                    
                         
export const query = graphql`
  query {              
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {   
        node {  
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }  
  }    
`      
export default PostsPage
       