import React, { useEffect, useState } from 'react';
import './App.css';
import { AllCases } from './AllCases';
import AllCountries from './AllCountries';
import HomeCountry from './HomeCountry'

function App() {
  const [data, setData] = useState({})

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

  return (
    <>
      <AllCases data={data} />
      <AllCountries />
      <HomeCountry />
    </>
  );
}

export default App;
