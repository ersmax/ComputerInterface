import {
  Box,
  Button,
  Drawer, DrawerBody,
  DrawerCloseButton,
  DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerOverlay, IconButton, Input,
  useDisclosure, VStack
} from "@chakra-ui/react";
import {useRef} from "react";
import NavigationButton from "@/components/navigation/NavigationButton";
import {FaBars, FaHotel, FaPlane, FaSkiing} from "react-icons/fa";
import {FaHouse} from "react-icons/fa6";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <IconButton position={'absolute'} right={5} top={2} icon={<FaBars/>} ref={btnRef} colorScheme='blue' onClick={onOpen} aria-label={'Menu'}/>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody mt={50}>
            <VStack>
              <NavigationButton path={'/'} title={'Home'} icon={FaHouse}/>
              <NavigationButton path={'/hotels'} title={'Hotels'} icon={FaHotel}/>
              <NavigationButton path={'/flights'} title={'Flights'} icon={FaPlane}/>
              <NavigationButton path={'/attractions'} title={'Attractions'} icon={FaSkiing}/>
            </VStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}
