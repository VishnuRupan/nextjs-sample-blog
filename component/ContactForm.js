import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  ButtonGroup,
  Stack,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <div>
      <FormControl id="name">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input name="name" placeholder="name" />
      </FormControl>

      <FormControl id="email">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl id="comment">
        <FormLabel htmlFor="comment">Email address</FormLabel>
        <Textarea placeholder="Here is a sample placeholder" size="md" />
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
