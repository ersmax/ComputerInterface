import {Avatar, Box, HStack, IconButton, Text, useMediaQuery} from "@chakra-ui/react";
import NavigationButton from "@/components/navigation/NavigationButton";
import {FaHotel, FaPlane, FaTrain, FaSkiing} from "react-icons/fa";
import NavDrawer from "@/components/navigation/NavDrawer";
import {useRouter} from "next/router";
import {FaHouse} from "react-icons/fa6";


export default function Navigation() {
  const [isMobile] = useMediaQuery('(max-width: 800px)')
  const router = useRouter()

  if (isMobile) {
    return <NavDrawer/>
  }

  return (
    <HStack w={'100%'} justifyContent={'space-between'} p={4} bg={'#5266CA'}>
      <Box>
      </Box>
      <HStack spacing={5}>
        <NavigationButton path={'/'} title={'Home'} icon={FaHouse}/>
        <NavigationButton path={'/hotels'} title={'Hotels'} icon={FaHotel}/>
        <NavigationButton path={'/flights'} title={'Flights'} icon={FaPlane}/>
        <NavigationButton path={'/attractions'} title={'Attractions'} icon={FaSkiing}/>
      </HStack>

      <HStack>
        <Text color={'white'}>
        </Text>
        <Avatar cursor={'pointer'} size={'sm'} onClick={() => router.push('/checkout')}/>
      </HStack>
    </HStack>
  )
}
