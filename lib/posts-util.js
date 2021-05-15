import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "post");

export const getPostFiles = () => {
  return fs.readdirSync(postsDir);
};

export const getPostsData = (fileName) => {
  const postSlug = fileName.replace(/\.md$/, "");

  const filePath = path.join(postsDir, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = postFiles.map((postFile) => {
    return getPostsData(postFile);
  });

  const sortedPosts = allPosts.sort((posta, postb) =>
    posta.date > postb.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
