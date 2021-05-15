import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Post = ({ title, date, text, image, path }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${path}/${image}`;

  const linkPath = `/posts/${path}`;

  // did not fill out path or image
  return (
    <Link href={linkPath}>
      <div className="image-hover max-size">
        <Image
          src={imagePath}
          alt="post"
          width={800}
          height={500}
          layout="responsive"
          className="object-fit"
        />
        <PostCard>
          <div className="line"></div>
          <h3>{title}</h3>
          <time className="date">{formattedDate}</time>

          <p> {text} </p>
        </PostCard>
      </div>
    </Link>
  );
};

const PostCard = styled.div`
  color: black;
  padding: 1rem;

  .line {
    width: 70%;
    height: 3px;
    background: #ffcece;
  }

  h3 {
    padding: 0.5rem 0rem;
    font-size: 1.3rem;
  }

  .date {
    font-size: 0.9rem;
    color: grey;
    font-style: italic;
  }

  p {
    padding: 1rem 0rem;
  }
`;

export default Post;
