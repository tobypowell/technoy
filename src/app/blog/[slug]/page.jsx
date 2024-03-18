import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { getPostSlug } from '@/utils/getPostMeta';
import Categories from '@/components/Categories';

// getStaticParams, to generate routes at build time
export const generateStaticParams = async () => {
  const slugs = getPostSlug('src/posts');
  return slugs.map((post) => {
    return { slug: post.slug };
  });
};

const getPageContent = (slug) => {
  const filePath = `src/posts/${slug}.md`;
  const post = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(post);
  return matterResult;
};

const ArticlePage = ({ params }) => {
  const post = getPageContent(params.slug);

  return (
    <main className='post'>
      <h1>{post.data.title}</h1>
      <Image
        alt={post.data.title}
        src={post.data.img}
        width={2048}
        height={400}
      />

      <div className='post-content'>
        <p>
          <strong>Published: </strong>
          {post.data.date} <br />
          <Categories categories={post.data.categories} />
        </p>
        <Markdown>{post.content}</Markdown>
      </div>
    </main>
  );
};

export default ArticlePage;
