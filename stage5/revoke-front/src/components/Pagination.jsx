import React from "react";
import config from "../config/config.json";

export default function Pagination({
  totalPages,
  handlePageChange,
  handleForward,
  handleBackward,
  currentPage,
}) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  const pageNumbers = [];

  for (let i = 1; i <= pages.length; i++) {
    if (i <= 3 || i === pages.length || Math.abs(currentPage - i) <= 1)
      pageNumbers.push(i);
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={{color: config.features.bottomBarColors[1]}}
              aria-label="Previous"
              onClick={handleBackward}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers?.map((number) => (
            <li class="page-item" key={number}>
              <a
                class="page-link"
                href="#"
                style={{ color: config.features.bottomBarColors[1] }}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              style={{ color: config.features.bottomBarColors[1] }}
              aria-label="Next"
              onClick={() => handleForward()}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
