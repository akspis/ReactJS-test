import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={
            currentPage === i
              ? "bg-gray-400 rounded-2xl h-8 w-8 flex items-center justify-center mr-5"
              : "flex items-center justify-center mr-5"
          }
        >
          <button onClick={() => handlePageClick(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return <ul className="flex">{renderPageNumbers()}</ul>;
};

export default Pagination;
