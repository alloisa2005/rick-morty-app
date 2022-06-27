import React from "react";

function Pagination({info, prevPage, nextPage}) {
  return (
    <div className="mb-4 pagination d-flex justify-content-center align-items-center">
      {info.prev ? (
        <button onClick={prevPage} className="page-item mx-4 btn">
          {"<<"} Prev
        </button>
      ) : null}
      <h2 className="text-center">Personajes</h2>
      {info.next ? (
        <button onClick={nextPage} className="page-item mx-4 btn">
          Next {">>"}
        </button>
      ) : null}
    </div>
  );
}

export default Pagination;
