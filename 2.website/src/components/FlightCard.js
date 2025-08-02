import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader, Checkbox,
  Heading, HStack, IconButton,
  Slider, SliderFilledTrack, SliderThumb,
  SliderTrack,
  Stack,
  StackDivider,
  Text, VStack
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {FaArrowRight} from "react-icons/fa";

export default function FlightCard({flight}) {
  const router = useRouter()
  return (
    <Card size={'lg'}>
      <CardBody>
        <HStack spacing={10} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Avatar size={'sm'} src={flight.image}/>
            <Text>{flight.airline}</Text>
          </HStack>
          <Text>
            {flight.trip}
          </Text>
          <Text opacity={0.6}>
            {flight.tripTime}
          </Text>
          <IconButton onClick={() => router.push('/checkout')} aria-label={'Book'} icon={<FaArrowRight/>}/>
        </HStack>

      </CardBody>
    </Card>
  )
}
