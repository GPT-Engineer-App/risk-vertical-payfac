import { Container, Heading, Text, VStack, Box, Image, Link } from "@chakra-ui/react";
import { FaCloud, FaLock, FaCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Payment Facilitation as a Service
          </Heading>
          <Text fontSize="xl">Tailored solutions for SaaS, ISVs, and ISOs operating in high-risk markets.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Why Choose Our PayFac Service?
          </Heading>
          <VStack spacing={5} align="start">
            <Box display="flex" alignItems="center">
              <FaCloud size="24px" style={{ marginRight: "15px" }} />
              <Text>Cloud-based infrastructure ensuring scalability and reliability.</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <FaLock size="24px" style={{ marginRight: "15px" }} />
              <Text>Enhanced security measures to protect sensitive payment data.</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <FaCode size="24px" style={{ marginRight: "15px" }} />
              <Text>Easy integration with existing systems using our robust APIs.</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Industries We Serve
          </Heading>
          <Text>Our solutions are ideal for high-risk industries such as online gaming, financial services, and healthcare.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Get Started
          </Heading>
          <Text>Ready to simplify your payment processing and enhance your service offering? Contact us today!</Text>
          <Link href="#" color="teal.500" isExternal>
            Contact Us
          </Link>
        </Box>

        <Box textAlign="center" mt={10}>
          <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMHBheW1lbnQlMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzE1MDQ2MDA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="High Tech Payment Solutions" boxSize="300px" objectFit="cover" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
