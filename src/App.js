import "./App.css";
import Header from "./components/Header";
import ExchangeContainer from "./components/ExchangeContainer";
import { ConverterProvider } from "./contexts/ConverterContext";
import Button from "./components/common/Button";

function App() {
  return (
    <div className='App'>
      <ConverterProvider>
        <Header />
        {/* <CurrencyContainer /> */}
        <ExchangeContainer />
        <Button />
      </ConverterProvider>
    </div>
  );
}

export default App;
