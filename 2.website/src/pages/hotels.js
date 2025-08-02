
import MainLayout from "../layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {Box, Center, Flex, Heading, HStack, SimpleGrid, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import TripFields from "@/components/TripFields";
import FiltersCard from "@/components/FiltersCard";

const hotels = [
  {
    title: 'Harbour Grand Hong Kong',
    location: '23 Oil Street, North Point',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/19241307.jpg?k=9db91a7f10a6759fd3d03b4153d93580c405b75c4a7c6a24f496e9dd8cf3102b&o=&hp=1',
    hasBookButton: true
  },
  {
    title: 'Cordis',
    location: '555 Shanghai Street, Yau Tsim Mong District',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/208583778.jpg?k=93520568525eb7a254057eb60abdd3c8081af1e0a7506684e70b1369767cb372&o=&hp=1',
    hasBookButton: true
  },
  {
    title: 'Grand Hyatt',
    location: '1 Harbour Road',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/528734717.jpg?k=fc327c268978a1d495d5eec82e8f387b9533512dbc1991580ac3515393c46cbc&o=&hp=1',
    hasBookButton: true
  },
  {
    title: 'Four Seasons',
    location: ' 8 Finance Street',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/318957044.jpg?k=b05a61f17116e9f20e2b5c9c3f336bb6e10175429dcf3f3c7396551a1f99a46d&o=&hp=1',
    hasBookButton: true
  }
]

export default function Hotels() {
  const [isMobile] = useMediaQuery('(max-width: 800px)')

  return (
    <MainLayout>
      <Center mt={5}>
      <TripFields/>
    </Center>
      <Box>
        <Box>
          <Heading>
            Discover the Hotels
          </Heading>
          <Text>
            The most popular hotels around Hong Kong
          </Text>
        </Box>
        <Flex flexDir={isMobile ? 'column' : 'row'} w={'100%'} gap={5} mt={5}>
          <FiltersCard/>
          <SimpleGrid w={'100%'} minChildWidth={'300px'} spacing={5}>
            {hotels.map(d => {
              return <ProductCard title={d.title} location={d.location} image={d.image} hasBookButton={d.hasBookButton}/>
            })}
          </SimpleGrid>
        </Flex>
      </Box>

    </MainLayout>
  );
}
