 import React from 'react'
import BlogItem from '../Cards/BlogItem'
import Footer from '../Footer/Index'
 
 function Blog({text}) {
   return (
     <div>
      
      <BlogItem text={text}/>
      <Footer/>
     </div>
   )
 }
 
 export default Blog;
 