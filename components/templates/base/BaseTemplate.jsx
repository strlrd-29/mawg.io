import {Box, Heading} from '@chakra-ui/react'

const BaseTemplate = ({sampleTextProp}) => {
	return (
		<Box>
			<Heading>{sampleTextProp}</Heading>
		</Box>
	)
}

export default BaseTemplate
