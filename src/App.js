import "./App.css";
import Header from "./components/Header";
import ExchangeContainer from "./components/ExchangeContainer";
import { ConverterProvider } from "./contexts/ConverterContext";
import Button from "./components/common/Button";

import styled from "styled-components";
import img from "./images/earth.png";

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background: url(${img}) 0 / cover no-repeat;
`;

function App() {
  return (
    <AppContainer>
      <ConverterProvider>
        <Header />
        <ExchangeContainer />
        <Button />
      </ConverterProvider>
    </AppContainer>
  );
}

export default App;
