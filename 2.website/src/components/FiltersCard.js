import {
  Box,
  Card,
  CardBody,
  CardHeader, Checkbox,
  Heading,
  Slider, SliderFilledTrack, SliderThumb,
  SliderTrack,
  Stack,
  StackDivider,
  Text, VStack
} from "@chakra-ui/react";

export default function FiltersCard() {
  return (
    <Card h={'fit-content'}>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Items Shown
            </Heading>
            <Text pt='2' fontSize='sm'>
              4/408
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Amenities
            </Heading>

            <VStack alignItems={'flex-start'}>
              <Checkbox>Breakfast</Checkbox>
              <Checkbox defaultChecked>Gym</Checkbox>
              <Checkbox>Swimming Pool</Checkbox>
              <Checkbox defaultChecked>Master Bedroom</Checkbox>
            </VStack>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Overview
            </Heading>
            <Text pt='2' fontSize='sm'>
              Check out the overview of your rooms.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Budget
            </Heading>
            <Slider aria-label='slider-ex-1' defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
