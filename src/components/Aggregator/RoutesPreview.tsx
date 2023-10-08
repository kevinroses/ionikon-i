import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { AggIcons, LlamaIcon, SmolCheck } from '../Icons';

const IconsBody = styled.div`
	display: flex;
	width: fit-content;
	overflow: hidden;
	margin-top: 16px;
	padding-left: 48px;
	padding-right: 48px;
	padding-bottom: 16px;

	animation: slide infinite linear 10s;

	@keyframes slide {
		0% {
			transform: translate3d(-60px, 0, 0);
		}
		100% {
			transform: translate3d(-540px, 0, 0);
		}
	}
`;

const MainIcon = styled.div`
	z-index: 1;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0px 16.4384px 92.0548px 13.1507px #121315;
`;

const IconElem = styled.div`
	box-shadow: 0px 2.63014px 15.7808px rgba(0, 0, 0, 0.45);
	width: 48px;
	height: 48px;
	margin-right: 48px;
`;

const Header = styled.div`
	position: relative;
`;

const CheckBody = styled.div`
	color: rgb(112, 160, 247);
	display: flex;
	justify-content: space-around;
	margin-top: 16px;
`;

const CheckWithText = ({ text }: { text: string }) => {
	return (
		<div style={{ display: 'flex', lineHeight: '12px' }}>
			{SmolCheck} <div style={{ fontSize: 12, marginLeft: '4px', marginRight: '4px' }}>{text}</div>
		</div>
	);
};

const RoutesPreview = () => {
	return (
		<Flex pt="30px" flexDir="column" justifyContent="space-around" h="100%">
			<Header>
				<MainIcon></MainIcon>

				<IconsBody>
					{[...AggIcons, ...AggIcons].map((Icon, i) => (
						<IconElem key={i}>{Icon}</IconElem>
					))}
				</IconsBody>
			</Header>
			<Box zIndex={1}>
				<Heading size={'md'} textAlign="center" mt={'4'}>
					Tokenizamos empresas escalables y de gran impacto.
				</Heading>
				<CheckBody>
					<CheckWithText text="Totalmente Libre" />
					<CheckWithText text="Estimación de Gas" />
					<CheckWithText text="Seguridad y Desarrollo" />
				</CheckBody>

				<Text color={'gray.300'} textAlign="center" mt={6}>
					IonikonSwap busca la mejor ruta para su comercio <br/> entre una variedad de agregadores Tokens, garantizándole
<br/> los mejores precios de ejecución en DeFi.
					
				</Text>
			</Box>
		</Flex>
	);
};

export default RoutesPreview;
