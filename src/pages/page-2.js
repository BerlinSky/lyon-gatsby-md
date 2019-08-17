import React from "react"
                             
import Layout from "../components/layout"
import Image from "../components/image"  
import SEO from "../components/seo"      
                                       
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Image />         
  </Layout>
)   
    
export default SecondPage
