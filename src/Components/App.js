import React, { useEffect, useState } from 'react';
import './App.css';
import { AllCases } from './AllCases';
import AllCountries from './AllCountries';

function App() {
  const [data, setData] = useState({})
  const [countriesData, setCountriesData] = useState([])
  useEffect(() => {
    fetch(' https://coronavirus-19-api.herokuapp.com/all')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setData(data)
      });
  }, [])

  console.log(countriesData)
  return (
    <>
      <AllCases data={data} />
      <AllCountries />
    </>
  );
}

export default App;
