import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getCountries } from "./actions";
import { useDispatch } from "react-redux";
import "./App.css"

export default function App() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getCountries())
    // getCountries()
  }, []);
  console.log(countries);




  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>React Router</h2>
      {countries.map(country => {
        return (
          <div key={country.name} >
            <h3>Name: {country.name}</h3>
            <h4>Capital: {country.capital}</h4>
            <p>
              <img
                src={country.flag || country.flags.png || country.flags.svg}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}
