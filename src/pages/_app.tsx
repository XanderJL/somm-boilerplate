import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme/index'
import PlausibleProvider from 'next-plausible';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_URL!}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PlausibleProvider>
  );
}

export default MyApp
