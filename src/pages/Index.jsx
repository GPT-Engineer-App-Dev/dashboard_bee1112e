import { Box, Flex, Text, Heading, Button, Icon, VStack, HStack, Avatar, Divider, Progress, Grid, GridItem } from "@chakra-ui/react";
import { FaChartLine, FaRegCalendarAlt, FaUsers, FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="lg">
          Dashboard
        </Heading>
        <Button leftIcon={<FaRegCalendarAlt />} colorScheme="blue">
          Today: 24th Apr 2023
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" bg="gray.100" p={5} borderRadius="md">
          <VStack align="stretch">
            <Text fontSize="xl" fontWeight="bold">
              Revenue
            </Text>
            <Progress colorScheme="green" size="sm" value={70} />
            <Text>$45,000</Text>
          </VStack>
        </GridItem>

        <GridItem w="100%" bg="gray.100" p={5} borderRadius="md">
          <VStack align="stretch">
            <Text fontSize="xl" fontWeight="bold">
              Orders
            </Text>
            <Progress colorScheme="orange" size="sm" value={50} />
            <Text>150 Orders</Text>
          </VStack>
        </GridItem>

        <GridItem w="100%" bg="gray.100" p={5} borderRadius="md">
          <VStack align="stretch">
            <Text fontSize="xl" fontWeight="bold">
              Customers
            </Text>
            <Progress colorScheme="purple" size="sm" value={90} />
            <Text>320 Customers</Text>
          </VStack>
        </GridItem>
      </Grid>

      <Flex mt={10}>
        <VStack spacing={5} align="stretch" flex={1} mr={5}>
          <Box bg="gray.100" p={5} borderRadius="md">
            <HStack justifyContent="space-between">
              <Text fontSize="xl" fontWeight="bold">
                Latest Orders
              </Text>
              <Button rightIcon={<FaClipboardList />} size="sm" colorScheme="teal">
                View all
              </Button>
            </HStack>
            {/* List of latest orders would go here */}
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md">
            <HStack justifyContent="space-between">
              <Text fontSize="xl" fontWeight="bold">
                Team Members
              </Text>
              <Button rightIcon={<FaUsers />} size="sm" colorScheme="pink">
                View all
              </Button>
            </HStack>
            {/* List of team members would go here */}
          </Box>
        </VStack>

        <VStack spacing={5} align="stretch" flex={1}>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">
              Sales Report
            </Text>
            <Divider my={3} />
            <Flex alignItems="center">
              <Avatar size="md" src="https://placehold.co/600x400" />
              <Box ml={3}>
                <Text fontWeight="bold">Samantha</Text>
                <Text fontSize="sm">Top Salesperson</Text>
              </Box>
            </Flex>
            {/* Sales graph would go here */}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
