import { Alert, AlertIcon } from '@chakra-ui/react';

const Phishing = () => {
	return (
		<Alert status="warning" justifyContent={'center'} fontWeight="bold" display={['none', 'none', 'none', 'none']}>
			<AlertIcon mr="4px" />
			
		</Alert>
	);
};

export { Phishing };
