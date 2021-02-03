import { css } from '@emotion/react';
import styled from '@emotion/styled';

import logo from './logo.svg';
import './App.css';

const Div = styled.div`
  color:white;
`;

function App() {
  return <Div css={css`background-color: black`}>asdfasdf</Div>;
}

export default App;
