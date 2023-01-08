import React, { createContext, useState, useEffect } from "react";
const RegexContext = createContext();

const StateProvder = ({ children }) => {
  const [teaSugar, setTeaSugar] = React.useState(0);
  const [teaNoSugar, setTeaNoSugar] = React.useState(0);

  const [coffeeSugar, setCoffeeSugar] = React.useState(0);
  const [coffeeNoSugar, setCoffeeNoSugar] = React.useState(0);

  const [water, setWater] = React.useState(0);

  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    setTotal(teaSugar + teaNoSugar + coffeeSugar + coffeeNoSugar + water);
    console.log("Total: ", total);
  }, [teaSugar, teaNoSugar, coffeeSugar, coffeeNoSugar, water]);

  return (
    <RegexContext.Provider
      value={{
        teaNoSugar,
        setTeaNoSugar,
        teaSugar,
        setTeaSugar,
        coffeeSugar,
        setCoffeeSugar,
        coffeeNoSugar,
        setCoffeeNoSugar,
        water,
        setWater,
        total,
      }}
    >
      {children}
    </RegexContext.Provider>
  );
};

const withStateProvder = (Child) => (props) =>
  (
    <RegexContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </RegexContext.Consumer>
  );
export { StateProvder, withStateProvder };
