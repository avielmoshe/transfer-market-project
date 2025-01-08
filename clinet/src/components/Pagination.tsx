import React, { useState } from "react";

interface PaginationProps<T> {
  data: T[]; // Generic type for any data array
  itemsPerPage: number;
  renderItem: (item: T) => React.ReactNode; // Function to render each item
}

const Pagination = <T,>({
  data,
  itemsPerPage,
  renderItem,
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const currentData = data.slice(
    (currentPage - 1) * currentPage * itemsPerPage
  );

  // Handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Render Current Data */}
      <div>{currentData.map(renderItem)}</div>

      {/* Pagination Controls */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
