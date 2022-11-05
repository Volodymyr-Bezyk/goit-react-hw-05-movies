import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { PaginationRow } from './Pagination.styled';

const pagination = document.getElementById('container');

const PaginatedItems = ({ response, setSearchParams }) => {
  const [pageCount, setPageCount] = useState(0);
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const { total_pages: totalPages, page } = response;

  useEffect(() => {
    setPageCount(totalPages);
  }, [totalPages]);

  const handlePageClick = e => {
    const newPage = e.selected + 1;
    setSearchParams({ ...params, page: newPage });
  };

  return createPortal(
    <>
      <PaginationRow
        breakLabel="..."
        nextLabel="Next >>"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< Prev"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        forcePage={page - 1}
      />
    </>,
    pagination
  );
};

PaginatedItems.propTypes = {
  response: PropTypes.shape({
    total_pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
  }).isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default PaginatedItems;
