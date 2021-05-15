import React from "react";
import MainNav from "../../component/layout/MainNav";
import PostContent from "../../component/posts/post-detail/PostContent";
import { getPostsData } from "../../lib/posts-util";

const SingleDetailsPage = (props) => {
  const imagePath = `/images/posts/${props.data.slug}/${props.data.image}`;
  const formattedDate = new Date(props.data.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <MainNav />
      <PostContent
        title={props.data.title}
        image={imagePath}
        content={props.data.content}
        slug={props.data.slug}
        date={formattedDate}
      />
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params;

  const postData = getPostsData(slug);

  return {
    props: {
      data: postData,
    },
    revalidate: 300,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default SingleDetailsPage;
