import {Button, Card, CardBody, CardFooter, Heading, Stack, Image, Text, Divider, ButtonGroup} from "@chakra-ui/react";
import {useRouter} from "next/router";

export default function ProductCard({ title, location, image, path, hasBookButton }) {
  const router = useRouter()
  return (
    <Card w={'100%'} cursor={'pointer'} onClick={() => router.push(path || '')}>
      <CardBody p={3}>
        <Image
          h={'220px'}
          w={'100%'}
          src={image}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text color={'gray.400'}>
            {location}
          </Text>
        </Stack>
      </CardBody>
      {hasBookButton && <CardFooter p={1} justifyContent={'flex-end'} onClick={() => router.push('/checkout')}>
        <Button size={'sm'} colorScheme={'blue'}>
          Book Now
        </Button>
      </CardFooter>}
    </Card>
  );

}
