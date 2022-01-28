import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getCountries } from "./actions";
import { useDispatch } from "react-redux";
import "./App.css"

export default function App() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const { isLoading } = useSelector(state => state)

  useEffect(() => {
    dispatch(getCountries())

  }, []);





  return (
    <div className="App">
      <h1>React Redux-Thunk Exercise</h1>

      {isLoading ? <p>Loading...</p> : countries.map(country => {
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
