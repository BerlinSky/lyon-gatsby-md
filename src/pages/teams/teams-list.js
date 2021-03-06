import React from "react"
// import { Link } from "gatsby"                        
                                                                         
import styles from "./teams.module.scss";                            
                                                                     
const TeamsPage = (props) => (                            
                                                      
  <div className={ styles.teams }>                                 
    <h1 className={ styles.title }>Welcome to the Teams Page</h1>                       
    <p>Our {props.totalCount} teams</p>    
            
    { props.children }                                                        
  </div>                                        
)                                              
        // {props.edges.map(({ node }) => (                    
        //   <li key={node.id}>                                            
        //     <Link to={node.fields.slug}>                               
        //       <h3>                                                    
        //         {node.frontmatter.title}{" "}                        
        //         <span>                                             
        //           — {node.frontmatter.date}                   
        //         </span>                                 
        //       </h3>                                
        //       <p>{node.excerpt}</p>                
        //     </Link>                                
        //   </li>                                   
        // ))}        
              
export default TeamsPage
              