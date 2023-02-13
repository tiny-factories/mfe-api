import Link from "next/link";

function Pagination({ items, pageSize, currentPage, onPageChange }) {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className="flex flex-wrap">
        {pages.map((page) => (
          <li key={page} className="pr-4">
            <div onClick={() => onPageChange(page)}>{page}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
