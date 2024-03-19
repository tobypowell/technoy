import React from 'react';
import { getPostMeta } from '@/utils/getPostMeta';
import Post from '@/components/Post';

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
