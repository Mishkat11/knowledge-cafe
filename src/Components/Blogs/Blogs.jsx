// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark, handleMarkRead}) => {
//    console.log(handleBookmark);
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className=" md:w-2/3 ">
            <h2 className=" text-3xl text-center">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog=>
                <Blog
                     key={blog.id} 
                     blog={blog}
          handleBookmark = {handleBookmark}
          handleMarkRead = {handleMarkRead}
          >
                     </Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookmark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func
}
export default Blogs;