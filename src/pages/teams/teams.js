import React from "react"
import { Link } from "gatsby"                        
                                         
import styles from "./teams.module.scss";            
                                            
const TeamsPage = ({data}) => (                      
  <div className={ styles.teams }>                                 
    <h1 className={ styles.title }>Welcome to the Teams Page</h1>                       
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
)             
            
export default TeamsPage
            