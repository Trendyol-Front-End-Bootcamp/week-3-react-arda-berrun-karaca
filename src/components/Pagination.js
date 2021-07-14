import React from "react";
import Button from "./Button";
import "./styles/Pagination.css";


function Pagination({ prev, next, setApi }) {

  return (
    <div className="pagination">
      <Button disabled={!prev} onClick={() => setApi(prev)}>
        Previous
      </Button>
      <Button disabled={!next} onClick={() => setApi(next)}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
