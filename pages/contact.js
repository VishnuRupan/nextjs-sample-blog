import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  AlertDescription,
  AlertTitle,
  CloseButton,
  FormHelperText,
  Alert,
  AlertIcon,
  Textarea,
} from "@chakra-ui/react";
import Hero from "../component/home-page/hero";
import MainNav from "../component/layout/MainNav";
import styled from "styled-components";

const ContactPage = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredComment, setEnteredComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);

  const sendMessageHandler = async (event) => {
    setLoading(true);
    event.preventDefault();

    setRequestStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          comment: enteredComment,
        }),

        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setRequestStatus("success");

      setEnteredComment("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestStatus("error");
    }

    setLoading(false);
  };

  return (
    <Contact>
      <MainNav />

      <main>
        <Hero
          title={"Questions or Comments?"}
          text={
            "If you have a question or comment, feel free to fill out the contact form below."
          }
          button={"Contact Me"}
        />
        <div className="form-ctn center-flex">
          <h2 className="h2-subhead">Contact</h2>
          {requestStatus === "success" && (
            <Alert status={requestStatus}>
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription display="block">
                  Your message was submitted!
                </AlertDescription>
              </Box>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={(e) => setRequestStatus(null)}
              />
            </Alert>
          )}

          {requestStatus === "error" && (
            <Alert status={requestStatus}>
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription display="block">
                  Your message did not submit. Please try again!
                </AlertDescription>
              </Box>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={(e) => setRequestStatus(null)}
              />
            </Alert>
          )}

          <form onSubmit={sendMessageHandler}>
            <FormControl id="name">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                name="name"
                placeholder="name"
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
              />
            </FormControl>
            <br />
            <FormControl id="email">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <br />
            <FormControl id="comment">
              <FormLabel htmlFor="comment">Message</FormLabel>
              <Textarea
                placeholder="Here is a sample placeholder"
                size="md"
                value={enteredComment}
                onChange={(e) => setEnteredComment(e.target.value)}
              />
            </FormControl>

            <Button isLoading={loading} mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        </div>{" "}
      </main>

      <img
        className="behind bg-image"
        src="/images/contact.jpg"
        alt="image of Vishnu"
      />
    </Contact>
  );
};

const Contact = styled.div`
  form {
    margin: 1rem 0rem;
    margin-bottom: 3rem;
    padding: 1rem;
    width: 30rem;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

export default ContactPage;
