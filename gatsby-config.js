module.exports = {
  siteMetadata: {
    title: `Gatsby Mini Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },  
  plugins: [            
    `gatsby-plugin-sass`,               
    `gatsby-plugin-react-helmet`,      
    {                                 
      resolve: `gatsby-source-filesystem`,         
      options: {                                 
        name: `images`,                         
        path: `${__dirname}/src/images`,       
      },                                       
    },                            
    {                           
      resolve: `gatsby-source-filesystem`,
      options: {                     
        name: `markdown-pages`,   
        path: `${__dirname}/src/pages/markdown-pages`,
      },                      
    },                       
    {                         
      resolve: `gatsby-source-filesystem`,
      options: {             
        name: `pages`,    
        path: `${__dirname}/src/pages`,
      },                  
    },                    
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {                   
      resolve: `gatsby-plugin-manifest`,
      options: {                
        name: `gatsby-starter-default`,
        short_name: `starter`, 
        start_url: `/`,      
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,              
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },                       
    },                      
    {                       
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]  
      }
    },                         
    {                                
      resolve: `gatsby-plugin-typography`,
      options: {                    
        pathToConfigModule: `src/utils/typography`,
      },                                
    },                               
    {                               
      resolve: `gatsby-plugin-manifest`,
      options: {                   
        name: "GatsbyJS Starter",       
        short_name: "GatsbyJS Starter",
        start_url: "/",          
        display: "standalone",  
        icon: "src/images/favicon.png", 
        crossOrigin: `use-credentials`,
      },                        
    },                        
                             
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],                        
}                          
                        