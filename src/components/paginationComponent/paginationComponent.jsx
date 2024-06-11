
import './paginationComponent.css';

export const PaginationComponent = ({ currentPage, onPageChange }) => {
    const totalPages = 5; 

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageClick(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};
