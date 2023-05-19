import { PaginationItem } from './PaginationItem';

const siblingsCount = 1;

function generatedPagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 20,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatedPagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatedPagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <div className="container flex gap-3 py-20 justify-center">
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem number={1} onPageChange={onPageChange} />
          {currentPage > 2 + siblingsCount && (
            <span className="w-9 h-8 border-2 border-gray-600 text-gray-600 rounded flex justify-center">
              ...
            </span>
          )}
        </>
      )}

      {previousPages?.map((page) => (
        <PaginationItem key={page} number={page} onPageChange={onPageChange} />
      ))}

      <PaginationItem
        number={currentPage}
        isCurrent
        onPageChange={onPageChange}
      />

      {nextPages?.map((page) => {
        return (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        );
      })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <span className="w-9 h-8 border-2 border-gray-600 text-gray-600 rounded flex justify-center">
              ...
            </span>
          )}
          <PaginationItem number={lastPage} onPageChange={onPageChange} />
        </>
      )}
    </div>
  );
}
