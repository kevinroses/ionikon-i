import { Heading, Image } from '@chakra-ui/react';
import styled from 'styled-components';
import loaderImg from '~/public/loader.png';

const Wrapper = styled.div`
	position: absolute;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	width: calc(100% - 32px);

	@media screen and (min-width: ${({ theme }) => theme.bpMed}) {
		position: relative;
		width: 100%;
	}
`;

const Name = styled(Heading)`
	font-size: 26px;

	@media screen and (min-width: ${({ theme }) => theme.bpLg}) {
		margin: 0 auto;
	}
`;

const Header = ({ children }) => {
	return (
		<Wrapper>
			
		</Wrapper>
	);
};

export default Header;
