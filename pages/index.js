import React from "react";
import Hero from "../component/home-page/hero";
import MainNav from "../component/layout/MainNav";
import Image from "next/image";
import styled from "styled-components";
import FeaturedPosts from "../component/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <Home>
      <div className="top-half">
        <MainNav />

        <Hero
          title={"A Place To Learn"}
          text={
            "This is my first blog site built using Next.js. All my blogs will be random and god bless baby Grogu"
          }
          button={"Start Reading"}
        />

        <img
          className="behind bg-image"
          src="/images/ocean.jpg"
          alt="image of Vishnu"
        />
      </div>

      <main>
        <FeaturedPosts pageName="Popular Blogs" posts={props.posts} />
      </main>
    </Home>
  );
};

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },

    revalidate: 2000,
  };
};

const Home = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default HomePage;
