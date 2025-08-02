
import MainLayout from "../../layouts/MainLayout";
import {
  Badge,
  Box, Button,
  Card,
  CardBody, CardFooter,
  CardHeader, Center,
  Heading,
  HStack, Icon, IconButton,
  SimpleGrid,
  Stack,
  StackDivider,
  Text, VStack
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {FaArrowLeft} from "react-icons/fa";

export default function Checkout() {
  const router = useRouter()

  return (
    <MainLayout>
     <Center p={5}>
       <Card w={'100%'} maxW={'508px'}>
         <CardHeader>
           <HStack justifyContent={'space-between'}>
             <IconButton onClick={() => router.push('/')} icon={<FaArrowLeft/>} aria-label={'Go Back'}/>
             <Badge colorScheme={'green'}>
               Total: $1401.21
             </Badge>
           </HStack>
          <Center>
            <Heading size='md'>Payment</Heading>
          </Center>
         </CardHeader>

         <CardBody p={5}>
           <Stack divider={<StackDivider />} spacing='4'>
             <Box>
               <Heading size='xs' textTransform='uppercase'>
                 Hotel
               </Heading>
               <HStack alignItems={'center'} justifyContent={'space-between'}>
                 <Text pt='2' fontSize='sm'>
                   Mandarin Oriental, Hong Kong
                 </Text>
                 <Badge>
                   $150/Night
                 </Badge>
               </HStack>
             </Box>
             <Box>
               <Heading size='xs' textTransform='uppercase'>
                 Flights
               </Heading>
               <HStack alignItems={'center'} justifyContent={'space-between'}>
                 <Text pt='2' fontSize='sm'>
                   Amsterdam - Hong Kong
                 </Text>
                 <Badge>
                   $450
                 </Badge>
               </HStack>
               <HStack alignItems={'center'} justifyContent={'space-between'}>
                 <Text pt='2' fontSize='sm'>
                   Hong Kong - Amsterdam
                 </Text>
                 <Badge>
                   $450
                 </Badge>
               </HStack>
             </Box>
             <Box>
               <Heading size='xs' textTransform='uppercase'>
                  Activities
               </Heading>
               <HStack alignItems={'center'} justifyContent={'space-between'}>
                 <Text pt='2' fontSize='sm'>
                   Ferris Wheel
                 </Text>
                 <Badge>
                   $15
                 </Badge>
               </HStack>
               <HStack alignItems={'center'} justifyContent={'space-between'}>
                 <Text pt='2' fontSize='sm'>
                   Ocean Park, Theme Park
                 </Text>
                 <Badge>
                   $35
                 </Badge>
               </HStack>
             </Box>
           </Stack>

         </CardBody>
         <CardFooter justifyContent={'flex-end'}>
           <Button onClick={() => router.push('/checkout/complete')} variant={'outline'} colorScheme={'green'}>
             Complete Payment
           </Button>
         </CardFooter>
       </Card>
     </Center>
    </MainLayout>
  );
}
