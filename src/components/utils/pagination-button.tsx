import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationButton = ({ currentPage, onPageChange }: Props) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
      window.location.hash = `#${newPage}`;
    }
  };

  const handleNext = () => {
    const newPage = currentPage + 1;
    onPageChange(newPage);
    window.location.hash = `#${newPage}`;
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`#${currentPage}`}
            onClick={(e) => {
              e.preventDefault();
              handlePrev();
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`#${currentPage}`}
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationButton;
