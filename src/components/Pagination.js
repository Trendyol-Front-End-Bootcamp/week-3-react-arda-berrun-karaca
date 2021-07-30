import React from 'react';
import Button from './Button';
import './styles/Pagination.css';

function Pagination({ prev, next, setPage }) {
  return (
    <div className="pagination">
      <Button disabled={!prev} onClick={() => setPage((page) => page - 1)}>
        Previous
      </Button>
      <Button disabled={!next} onClick={() => setPage((page) => page + 1)}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
