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

export default function TripFields() {
  const [date, setDate] = useState()

  return (
    <HStack p={2}>
      <Select placeholder='Where are you going?'>
        <option value='option1'>Hong Kong, China</option>
        <option value='option2'>Shanghai, China</option>
        <option value='option3'>Amsterdam, Netherlands</option>
      </Select>
      <FormControl>

        <DatePicker
          id="published-date"
          selectedDate={date}
          onChange={(d) => setDate(d)}
          showPopperArrow={true}
        />
      </FormControl>
      <GuestPicker/>
    </HStack>
  )
}
