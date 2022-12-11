import {
  Box,
  Title,
  Paper,
  Text,
  Container,
  Flex,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import {
  IconPhone,
  IconMail
} from "@tabler/icons";
import Footer from "../Components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <Box>
      <Container>
        <Text
          style={{
            fontSize: "30px",
            color: "#10243f",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Contact Us
        </Text>
        <Box mt={32}>
          <Paper withBorder p="lg">
            <Flex
              direction="column"
              gap="lg"
              align="center"
              maw={300}
              mx="auto"
            >
              <Flex gap="sm" 
              align="center"
              maw={300}
              mx="auto">
              <IconPhone></IconPhone> 01832821378
              </Flex>
              <Flex gap="sm" 
              align="center"
              maw={300}
              mx="auto">
              <IconMail></IconMail> coordinator.gjcei@gndu.ac.in
              </Flex>

              <strong>Or</strong>
                          
              <TextInput
                placeholder="Name..."
                label="Name"
                required
                sx={{ width: "100%" }}
              />

              <TextInput
                placeholder="Email..."
                label="Email"
                required
                sx={{ width: "100%" }}
              />

              <Textarea
                placeholder="Message"
                label="Message"
                required
                sx={{ width: "100%" }}
              />

              <Button sx={{ width: "100%" }}>Submit</Button>
            </Flex>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default ContactUs;
