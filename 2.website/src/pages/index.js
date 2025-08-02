
import MainLayout from "../layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {Box, Center, Heading, HStack, SimpleGrid, Text} from "@chakra-ui/react";
import TripFields from "@/components/TripFields";

const destinations = [
  {
    path: '/hotels',
    title: 'New York',
    location: 'United States',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg'
  },
  {
    path: '/hotels',
    title: 'Shanghai',
    location: 'China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg/1200px-Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg'
  },
  {
    path: '/hotels',
    title: 'Hong Kong',
    location: 'China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Island_Skyline_201108.jpg/1200px-Hong_Kong_Island_Skyline_201108.jpg'
  },
  {
    path: '/hotels',
    title: 'Tokyo',
    location: 'Japan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/1920px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg'
  }
]

export default function Home() {
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
       <SimpleGrid minChildWidth={'300px'} spacing={5}>
         {destinations.map(d => {
           return <ProductCard path={d.path} title={d.title} location={d.location} image={d.image}/>
         })}
       </SimpleGrid>
     </Box>

   </MainLayout>
  );
}
