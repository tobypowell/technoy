import React from 'react';
import Link from 'next/link';
import Categories from './Categories';

const Post = ({ title, slug, date, categories, excerpt }) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>
        <strong>Published: </strong>
        {date} <br />
      </p>
      <Categories categories={categories} />
      <p>{excerpt}</p>
      <Link href={`/blog/${slug}`}>Read full</Link>
    </article>
  );
};

export default Post;
