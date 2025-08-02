import {baseTheme, ChakraProvider, extendTheme} from "@chakra-ui/react";
import './../styles/date-picker.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
