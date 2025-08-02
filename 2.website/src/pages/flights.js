
import MainLayout from "../layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {Box, Center, Heading, HStack, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import TripFields from "@/components/TripFields";
import FlightTripFields from "@/components/TripFields/FlightsTripFields";
import FlightCard from "@/components/FlightCard";

const flights = [
  {
    airline: 'Cathay Pacific',
    image: 'https://www.gstatic.com/flights/airline_logos/70px/dark/CX.png',
    trip: 'Amsterdam - Hong Kong',
    tripTime: '8:05 - 20:35'
  },
  {
    airline: 'Cathay Pacific',
    image: 'https://www.gstatic.com/flights/airline_logos/70px/dark/CX.png',
    trip: 'Amsterdam - Hong Kong',
    tripTime: '8:05 - 20:35'
  },
  {
    airline: 'Cathay Pacific',
    image: 'https://www.gstatic.com/flights/airline_logos/70px/dark/CX.png',
    trip: 'Amsterdam - Hong Kong',
    tripTime: '8:05 - 20:35'
  },
]

export default function Flights() {
  return (
    <MainLayout>
      <Center mt={5}>
        <FlightTripFields/>
      </Center>
      <Center mt={5}>
        <VStack>
          {flights.map(f => {
            return <FlightCard flight={f}/>
          })}
        </VStack>
      </Center>
    </MainLayout>
  );
}
