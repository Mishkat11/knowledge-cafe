
import PropTypes from 'prop-types';

Books.propTypes = {
    book: PropTypes.object.isRequired
};

function Books({book}) {
    const {title} = book
    return (
        <div  className=' text-center rounded-lg bg-slate-200 mb-3 '>
            <h3 className=' text-xl font-bold '>{title}</h3>
        </div>
    );
}

export default Books;