import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// get path from argument
// get folder where md exists
// filter folder to ensure we only have md and store in new array
// map through the results and get the file contents
// convert with matter
// return front matter

const createPath = (dir) => {
  return path.join(process.cwd(), `posts/${dir}`);
};

const getPostData = (basePath, slug = null) => {
  const folder = path.join(process.cwd(), `${basePath}/`);
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));
  const posts = markdownFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${folder}${filename}`, 'utf8');
    const matterResult = matter(fileContents);

    if (slug) {
      return {
        slug: matterResult.data.slug,
      };
    }
    return {
      id: matterResult.data.id,
      slug: matterResult.data.slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      categories: matterResult.data.categories,
      excerpt: matterResult.data.excerpt,
      img: matterResult.data.img,
    };
  });
  // sort date into latest post
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostMeta = (basePath) => {
  const posts = getPostData(basePath);
  return posts;
};

export const getPostSlug = (basePath) => {
  const slugs = getPostData(basePath, 'true');
  return slugs;
};
