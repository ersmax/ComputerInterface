import {
  Button, IconButton, NumberDecrementStepper, NumberIncrementStepper,
  NumberInput, NumberInputField, NumberInputStepper,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger, VStack, Text, HStack
} from "@chakra-ui/react";
import {FaPeopleGroup} from "react-icons/fa6";

export default function GuestPicker() {

  const InputField = () => {
    return  <NumberInput size='sm' maxW={20} defaultValue={0}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  }

  return <Popover>
    <PopoverTrigger>
      <IconButton icon={<FaPeopleGroup/>} aria-label={'Guests'}/>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverBody>
        <VStack spacing={2} alignItems={'space-between'}>
          <HStack justifyContent={'space-between'}>
            <Text>
              Adults:
            </Text>
            <InputField/>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <Text>
              Children:
            </Text>
            <InputField/>
          </HStack>
        </VStack>
      </PopoverBody>
    </PopoverContent>
  </Popover>
}
