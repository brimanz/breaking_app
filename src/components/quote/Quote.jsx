import React from 'react';
import styled from '@emotion/styled';


const Quote = ({quote}) =>{
	return(
		<Container>
			<Title>{quote.quote}</Title>
			<Subtitle>-{quote.author}</Subtitle>
		</Container>
	);
}


export default Quote;


const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	border-radius: .4rem;
	max-width: 80rem;
	background: #f5f5f5;
	margin-top: 5rem;
`;

const Title = styled.h1`
	font-size: 2.2rem;
	font-family: sans-serif;
`;

const Subtitle = styled.h4`
	font-family: Tahoma;
	font-size: 1.3rem;
	font-weight: bold;
	color: #666666;
	text-align: right;
`;