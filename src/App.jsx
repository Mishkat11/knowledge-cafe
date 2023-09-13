
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
// import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  
  const [bookmark, setBookMark]= useState([])
  const [markRead, setMarkRead] = useState(0)

  const handleBookmark = (blog)=>{
   const newBookmark = [...bookmark,blog]
   setBookMark(newBookmark)
  }
  const handleMarkRead = (time,id)=>{
   setMarkRead(markRead+time)
const newRead = bookmark.filter(item=>item.id !== id)

setBookMark(newRead)

  }

  return (
    <>
     
     <Header></Header>

     <div className='md:flex  w-11/12 mx-auto gap-3'>
      <Blogs handleMarkRead={handleMarkRead} handleBookmark={handleBookmark}></Blogs>
      <Bookmarks markRead={markRead}  bookmark={bookmark}></Bookmarks>
     </div>
     
      
    </>
  )
}

export default App
