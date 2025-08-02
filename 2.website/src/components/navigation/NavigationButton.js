import {Button, Icon} from "@chakra-ui/react";
import {useRouter} from "next/router";

export default function NavigationButton({title, icon, path}) {
  const router = useRouter()
  return (
    <Button w={'100%'} gap={2} onClick={() => router.push(path)}>
      <Icon as={icon}/>
      {title}
    </Button>
  )
}
