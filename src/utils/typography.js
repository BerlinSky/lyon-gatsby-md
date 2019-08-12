import Typography from "typography"

import deYoungTheme from "typography-theme-de-young"
deYoungTheme.baseFontSize = '16px'                  
deYoungTheme.lineHeight = 1.56    
                                                    
const typography = new Typography(deYoungTheme)     
                                       
export const { scale, rhythm, options } = typography
export default typography           
                                    