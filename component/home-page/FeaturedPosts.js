import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { SimpleGrid } from "@chakra-ui/react";
import Post from "../posts/Post";

const FeaturedPosts = (props) => {
  return (
    <PopularPosts>
      <h2 className="h2-subhead">{props.pageName}</h2>
      <SimpleGrid minChildWidth="300px" gap={6}>
        {props.posts.map((post) => (
          <Post
            key={post.slug}
            title={post.title}
            image={post.image}
            text={post.text}
            date={post.date}
            path={post.slug}
          />
        ))}
      </SimpleGrid>
    </PopularPosts>
  );
};

const PopularPosts = styled.section`
  min-height: 100vh;
  position: relative;

  @media only screen and (max-width: 360px) {
    padding: 2rem 0.5rem;
  }
`;

export default FeaturedPosts;
