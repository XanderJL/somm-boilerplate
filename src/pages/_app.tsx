import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme/index'
import PlausibleProvider from 'next-plausible'
import { DialogProvider } from 'context/dialogContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_URL!}>
      <ChakraProvider theme={theme}>
        <DialogProvider>
          <Component {...pageProps} />
        </DialogProvider>
      </ChakraProvider>
    </PlausibleProvider>
  )
}

export default MyApp
