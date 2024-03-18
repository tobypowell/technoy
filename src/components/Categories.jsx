import React from 'react';
import Link from 'next/link';

const Categories = ({ categories }) => {
  return (
    <>
      {categories.map((cat, idx) => {
        return (
          <React.Fragment key={cat}>
            <Link href={`/blog/category/${cat}`}>{cat}</Link>
            {categories.length - 1 > idx ? ' | ' : ''}{' '}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Categories;
