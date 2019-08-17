import React from "react"
// import { Link, graphql } from "gatsby"                   
import { graphql } from "gatsby"                                            
                                                            
import Layout from "../components/layout"                  
import TeamPage from "./teams/teams-list"                  
import TeamsListItemPage from "./teams/teams-list-item"        
                                                      
const TeamsLandingPage = ({data}) => (              
  <Layout>                                          
    <TeamPage totalCount={data.allMarkdownRemark.totalCount} edges={data.allMarkdownRemark.edges}>
      <ul>                                          
        { data.allMarkdownRemark.edges.map(({ node }) => ( 
                                                  
          <TeamsListItemPage                 
            key={node.id}                    
            slug={node.fields.slug}       
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          >                            
          </TeamsListItemPage>                                             
                                                  
        ))}                                               
      </ul>                                   
    </TeamPage>                                                                                   
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
export default TeamsLandingPage
