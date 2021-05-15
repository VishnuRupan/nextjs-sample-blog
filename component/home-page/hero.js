import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

const Hero = ({ title, text, button }) => {
  return (
    <section>
      <HeroSection className="center-flex">
        <div className="text-content">
          <h1> {title}</h1>
          <p> {text} </p>
        </div>

        <div className="btn-container center-flex">
          <Button colorScheme="blue" size="lg" borderRadius="2px">
            {button}
          </Button>
        </div>
      </HeroSection>
    </section>
  );
};

const HeroSection = styled.section`
  min-height: 70vh;
  padding: 1rem 2rem;
  position: relative;
  color: #292929;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    padding: 2rem 0rem;

    @media only screen and (max-width: 600px) {
      font-size: 2.5rem;
    }

    @media only screen and (max-width: 400px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.3rem;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }

    @media only screen and (max-width: 400px) {
      font-size: 0.9rem;
    }
  }

  img {
    z-index: -10;
    opacity: 0.6;
    object-fit: cover;
  }

  .btn-container {
    padding: 3rem 0rem;
  }
`;

export default Hero;
