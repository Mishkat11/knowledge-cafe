import PropTypes from 'prop-types'
import Books from '../Books/Books';
const Bookmarks = ({bookmark,markRead}) => {
    console.log(markRead);
//   console.log(bookmark);
    return (
        <div className=" md:w-1/3 bg-slate-400 mt-3 ">
            <h1 className='text-center text-2xl'>Reading time: {markRead} min</h1>
           <h4 className=" text-center pb-4 text-2xl"> Bookmark: {bookmark.length}</h4> 
           {
            bookmark.map((book,idx) =><Books key={idx} book={book}></Books>)
           }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmark: PropTypes.array.isRequired,
    markRead: PropTypes.number
}
export default Bookmarks;