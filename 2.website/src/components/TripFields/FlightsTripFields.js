import {
  Button, FormControl, FormHelperText, FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger, Select,
  VStack
} from "@chakra-ui/react";

import {useState} from "react";
import DatePicker from "@/components/DatePicker";
import GuestPicker from "@/components/TripFields/GuestsPicker";

export default function FlightTripFields() {
  const [date, setDate] = useState()

  return (
    <HStack p={2}>
      <VStack w={'100%'}>
        <Select placeholder='Leaving From'>
          <option value='option1'>Hong Kong, China</option>
          <option value='option2'>Shanghai, China</option>
          <option value='option3'>Amsterdam, Netherlands</option>
        </Select>
        <Select placeholder='Destination'>
          <option value='option1'>Hong Kong, China</option>
          <option value='option2'>Shanghai, China</option>
          <option value='option3'>Amsterdam, Netherlands</option>
        </Select>
      </VStack>
      <VStack>
        <FormControl>
          <DatePicker
            id="published-date"
            selectedDate={date}
            onChange={(d) => setDate(d)}
            showPopperArrow={true}
          />
        </FormControl>
        <Select placeholder='Trip Type'>
          <option value='option1'>Round Trip</option>
          <option value='option2'>One Way</option>
        </Select>
      </VStack>
      <GuestPicker/>
    </HStack>
  )
}
