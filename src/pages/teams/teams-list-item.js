import React from "react"
import { Link } from "gatsby"                        
                                  
// import styles from "./teams.module.scss";
                                            
const TeamsListItemPage = (props) => (   
  <li key={props.key}>                                            
    <Link to={props.slug}>                               
       <h3>                                                    
        {props.title}{" "}                        
         <span>                                             
          — {props.date}                   
         </span>                                 
       </h3>                                
      <p>{props.excerpt}</p>                
     </Link>                                
   </li>                             
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
                        
export default TeamsListItemPage
                 
                        