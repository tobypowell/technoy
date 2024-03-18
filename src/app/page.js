import React from 'react';
import { getPostMeta } from '@/utils/getPostMeta';
import Post from '@/components/Post';

export default function Home() {
  const posts = getPostMeta('src/posts');

  return (
    <main>
      {posts &&
        posts.map((post) => {
          const { id } = post;
          return <Post key={id} {...post} />;
        })}
    </main>
  );
}
