import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class="mb-10 flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="list-style-none flex">
          {pageNumbers.map((number) => (
            <li
              key={number}
              aria-current="page"
              class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              <a
               class="relative block rounded bg-neutral-800 py-1.5 px-3 text-sm font-medium text-neutral-50 transition-all duration-300 dark:bg-neutral-900"
            href="#!"
                onClick={() => paginate(number)}
              >
                <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                  (current)
                </span>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
