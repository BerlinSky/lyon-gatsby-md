import React from "react"
// import { Link, graphql } from "gatsby"
import { graphql } from "gatsby" 
                                  
import Layout from "../components/layout"
import TeamPage from "./teams/teams"        
                                         
const TeamsLandingPage = ({data}) => (           
  <Layout>                           
    <TeamPage data={data}></TeamPage>  
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
