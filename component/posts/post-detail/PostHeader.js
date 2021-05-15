import Image from "next/image";
import styled from "styled-components";

const PostHeader = (props) => {
  //need to set image and alt

  return (
    <div>
      <Image
        src={props.image}
        alt="border"
        width="400px"
        height="100px"
        layout="responsive"
        className="object-fit"
      />
      <h1>{props.title}</h1>
      <time>{props.date}</time>
    </div>
  );
};

const Header = styled.div``;

export default PostHeader;
