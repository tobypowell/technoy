import React from 'react';
import { getPostMeta, getPostSlug } from '@/utils/getPostMeta';

import Post from '@/components/Post';

// getStaticParams, to generate routes at build time
export const generateStaticParams = async () => {
  const slugs = getPostSlug('src/posts');
  return slugs.map((post) => {
    return { slug: post.slug };
  });
};

const CategoryPage = ({ params }) => {
  const posts = getPostMeta('src/posts');

  const cats = posts.filter((post) => {
    // filter to see if categories contains the param
    return post.categories.includes(params.cat);
  });

  return (
    <>
      <main className='category-page'>
        <h1>{params.cat}:</h1>
        {cats.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </>
  );
};

export default CategoryPage;
