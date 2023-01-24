import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

import Quote from './components/quote/Quote';


const App = () =>{

  const [quote, getQuote] = useState({});

  const callAPI = async() =>{
    const URL = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const response = await URL.json();

    getQuote(response[0]);
  }

  useEffect(() =>{
    callAPI();
  },[])


  return(
    <Container>

      <Quote
        quote={quote}
      />

      <Button
        onClick={callAPI}
      >
        Get quote
      </Button>
    </Container>
  );
}


export default App;

const Button = styled.button`
  background: #f5f55;
  background-size: 30rem;
  font-family: sans-serif;
  color: #000000;
  font-size: 2rem;
  border: 2px solid #000000;
  margin-top: 3rem;
  trasition: background 1s ease;

  :hover{
    background: #666666;
    color: #f5f5f5;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;