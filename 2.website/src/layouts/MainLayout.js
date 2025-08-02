import {Box, Center, HStack, Input} from "@chakra-ui/react";
import Navigation from "@/components/navigation";
import TripFields from "@/components/TripFields";

export default function MainLayout({children}) {
  return (
    <Box>
      <Navigation/>
      <Box p={10}>
        {children}
      </Box>
    </Box>
  )
}
