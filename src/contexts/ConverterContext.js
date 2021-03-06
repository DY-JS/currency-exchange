import { createContext, useState, useMemo } from "react";
import { getInitialData } from "../helpers/common";

export const ConverterContext = createContext();

export const ConverterProvider = ({ children }) => {
  const currancies = useMemo(() => ["USD", "EUR", "UAH"], []);

  const initialData = getInitialData(currancies);
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  const [currancyRates, setCurrancyRate] = useState("");
  const [values, setValues] = useState({
    value1: "",
    value2: "",
  });
  const [selectedCurrancies, setSelectedCurrancies] = useState({
    selected1: "USD",
    selected2: "USD",
  });

  const [clear, setClear] = useState(false);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      currancyRates,
      setCurrancyRate,
      values,
      selectedCurrancies,
      setSelectedCurrancies,
      setValues,
      initialData,
      currancies,
      clear,
      setClear,
      errorLoading,
      setErrorLoading,
    }),
    [
      isLoading,
      setIsLoading,
      currancyRates,
      values,
      selectedCurrancies,
      currancies,
      initialData,
      clear,
      errorLoading,
    ]
  );

  return (
    <ConverterContext.Provider value={value}>
      {children}
    </ConverterContext.Provider>
  );
};
