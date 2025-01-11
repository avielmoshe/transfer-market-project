import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
interface PaginationCardProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

function PaginationCard({ page, setPage, totalPages }: PaginationCardProps) {
  const pagesPerRange = 10; // Number of pages displayed at a time

  // Calculate the start and end of the visible page range
  const startPage = Math.floor((page - 1) / pagesPerRange) * pagesPerRange + 1;
  const endPage = Math.min(startPage + pagesPerRange - 1, totalPages);

  // Generate the visible page numbers
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  // Handle previous page
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  // Handle next page
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // Handle direct page click
  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevious}
            style={{ cursor: "pointer" }}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {visiblePages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => handlePageClick(pageNumber)}
              style={{
                cursor: "pointer",
                fontWeight: page === pageNumber ? "bold" : "normal",
              }}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis (optional, shown if there are more pages after current range) */}
        {endPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext onClick={handleNext} style={{ cursor: "pointer" }} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationCard;
