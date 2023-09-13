import PropTypes from 'prop-types'
import { FaBookmark} from 'react-icons/fa';
const Blog = ({blog, handleBookmark, handleMarkRead}) => {
    // console.log(blog);
    // console.log(handleMarkRead);
    // console.log(handleBookmark);
    const {cover,title,author_img,author,posted_date,reading_time,hashtags,id}= blog
   
    return (
        <>
        <div className=' mb-10 space-y-2'>
            <img className='w-full' src={cover} alt="" />
           <div className='Container flex justify-between pt-5 pb-5'>
           <div className='flex gap-5 mx-3'>
            <img className=' w-14' src={author_img} alt="" />
           <div>
           <p>{author}</p>
            <p><small>{posted_date}</small></p>
           </div>
</div>
<div className='flex gap-5 items-center'>
    <p>{reading_time} min read</p>

    <button onClick={()=>handleBookmark(blog)} className=' bg-red-400' ><FaBookmark></FaBookmark></button>
</div>
           </div>
           <h3 className='mx-7 pb-04'>{title}</h3>
        <p className=' pt-4 '>
            {
                hashtags.map((hash,idx)=>
                <span className='px-4' key={idx}> <a href=""># {hash}</a></span> 
                )
            }
        </p>
        <button className=' underline text-purple-500' onClick={()=>handleMarkRead(reading_time,id)}>Mark as Read</button>
        </div>
     
        </>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func
  
}

export default Blog;