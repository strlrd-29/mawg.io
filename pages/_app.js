import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '@/styles/theme'

function MyApp({Component, pageProps}) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
