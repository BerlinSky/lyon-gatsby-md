import React from "react"
import { Link } from "gatsby"                        
                                      
import styles from "./teams-list-item.module.scss";
                                            
const TeamsListItemPage = (props) => (   
  <li className={styles.listItem}>                                            
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
                                    
export default TeamsListItemPage   
                                  
                         