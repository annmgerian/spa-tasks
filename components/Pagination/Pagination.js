import React from 'react';

const Pagination = props => {
    const {currentPage, pages, pagesNumber, prev, next, setPage} = props;

    return (
        <nav className="mt-5" aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                    <button onClick={() => setPage(1)} className="page-link" style={{color: '#000000'}}>
                        First
                    </button>
                </li>
                <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
                    <button
                        onClick={prev}
                        className="page-link"
                        tabIndex="-1"
                        aria-disabled="true"
                        style={{color: '#000000'}}
                    >
                        Previous
                    </button>
                </li>
                <li className="page-item active" aria-current="page">
                    <button className="page-link" style={{color: '#000000', backgroundColor: '#e9ecef'}}>
                        {currentPage} <span className="sr-only">(current)</span>
                    </button>
                </li>
                <li
                    className={
                        currentPage === Math.ceil(pages / pagesNumber)
                            ? 'page-item disabled'
                            : 'page-item'
                    }
                >
                    <button onClick={next} className="page-link" style={{color: '#000000'}}>
                        Next
                    </button>
                </li>
                <li className="page-item">
                    <button
                        onClick={() => setPage(Math.ceil(pages / pagesNumber))}
                        className="page-link"
                        style={{color: '#000000'}}
                    >
                        Last {Math.ceil(pages / pagesNumber)}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
