import React, { useEffect, useState } from 'react';
import './App.css';
import { AllCases } from './AllCases';

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
  useEffect(() => {
    fetch('https://coronavirus-19-api.herokuapp.com/countries ')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountriesData(data)
      });
  }, [])
  console.log(countriesData)
  return (
    <>
      <AllCases data={data} />
    </>
  );
}

export default App;
