import React from "react";
import FeaturedPosts from "../../component/home-page/FeaturedPosts";
import Hero from "../../component/home-page/hero";
import MainNav from "../../component/layout/MainNav";

import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  return (
    <div>
      <MainNav />

      <main>
        <Hero
          title={"Explore My Blogs"}
          text={
            "From topics on tech to science and even relationships, there's always something to learn here."
          }
          button={"Start Reading"}
        />

        <FeaturedPosts pageName="All Blogs" posts={props.posts} />
      </main>

      <img
        className="behind bg-image"
        src="/images/tree.jpg"
        alt="image of Vishnu"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },

    revalidate: 2000,
  };
};

export default AllPostsPage;
