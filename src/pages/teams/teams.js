import React from "react"
import { Link } from "gatsby"
                                         
// import Layout from "../components/layout"
                      
// import styles from "./teams.module.scss";
                                    
const TeamsPage = ({data}) => (        
  <section>                              
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
  </section>
)             
            
export default TeamsPage
            