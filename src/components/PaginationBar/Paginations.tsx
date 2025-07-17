import React from "react";

interface PaginationsProps {
  total: number;
  currentPage: number;
  LessonspageSize: number;
  onPageChange: (page: number) => void;
}

const Paginations: React.FC<PaginationsProps> = ({
  total,
  currentPage,
  LessonspageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / LessonspageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-end gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded bg-white text-xlg shadow transition disabled:opacity-50 hover:bg-[#169FC6] hover:text-white"
      >
        &#x2039;
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded bg-white shadow transition disabled:opacity-50 hover:bg-[#169FC6] hover:text-white"
      >
        &#x203A;
      </button>
    </div>
  );
};

export default Paginations;