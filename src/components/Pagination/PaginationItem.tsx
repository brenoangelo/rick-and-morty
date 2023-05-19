
interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange
}: PaginationItemProps) {
  if(isCurrent) {
    return (
      <button 
        disabled

        className="w-9 h-8 border-2 border-green-300 text-gray-700 rounded bg-green-300"
      >
        {number}
      </button>
    )
  }

  return (
    <button 
      onClick={() => onPageChange(number)}

      className="w-9 h-8 border-2 border-green-300 text-green-300 rounded"
    >
      {number}
    </button>
  )
}