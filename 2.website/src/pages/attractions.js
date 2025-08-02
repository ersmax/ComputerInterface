
import MainLayout from "../layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {Box, Center, Flex, Heading, HStack, SimpleGrid, Text, useMediaQuery} from "@chakra-ui/react";
import TripFields from "@/components/TripFields";
import FiltersCard from "@/components/FiltersCard";

const attractions = [
  {
    title: 'The Big Buddha',
    location: '23 Oil Street, North Point',
    image: 'https://media.timeout.com/images/103814273/1372/1029/image.webp',
    hasBookButton: true
  },
  {
    title: 'Hong Kong Disneyland',
    location: '555 Shanghai Street, Yau Tsim Mong District',
    image: 'https://media.timeout.com/images/105720382/1372/1029/image.webp',
    hasBookButton: true
  },
  {
    title: 'Hong Kong Observation Wheel',
    location: '1 Harbour Road',
    image: 'https://media.timeout.com/images/103800389/1372/1029/image.webp',
    hasBookButton: true
  },
  {
    title: 'Hong Kong Space Museum',
    location: ' 8 Finance Street',
    image: 'https://media.timeout.com/images/106091610/1372/1029/image.webp',
    hasBookButton: true
  },
  {
    title: 'Biking',
    location: 'Peng Chau',
    image: 'https://media.timeout.com/images/105938956/image.jpg',
    hasBookButton: true
  }
]

export default function Attractions() {

  const [isMobile] = useMediaQuery('(max-width: 800px)')

  return (
    <MainLayout>
      <Center mt={5}>
        <TripFields/>
      </Center>
      <Box>
        <Box>
          <Heading>
            Discover the World
          </Heading>
          <Text>
            The most popular places around the world
          </Text>
        </Box>
        <Flex flexDir={isMobile ? 'column' : 'row'} w={'100%'} gap={5} mt={5}>
          <FiltersCard/>
          <SimpleGrid w={'100%'} minChildWidth={'300px'} spacing={5}>
            {attractions.map(d => {
              return <ProductCard title={d.title} location={d.location} image={d.image} hasBookButton={d.hasBookButton}/>
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </MainLayout>
  );
}
