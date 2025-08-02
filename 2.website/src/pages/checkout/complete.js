
import MainLayout from "../../layouts/MainLayout";
import {
  Alert, AlertDescription, AlertIcon, AlertTitle,
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
              <Heading size='md'>Payment Complete</Heading>
            </Center>
          </CardHeader>

          <CardBody p={5}>
            <Alert
              status='success'
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Payment Successful
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
                Your booking has been successful.
              </AlertDescription>
            </Alert>

          </CardBody>
          <CardFooter justifyContent={'flex-end'}>
            <Button onClick={() => router.push('/')} variant={'outline'} colorScheme={'green'}>
              Continue
            </Button>
          </CardFooter>
        </Card>
      </Center>
    </MainLayout>
  );
}
