import React, { useEffect, useState } from 'react';
import './App.css';

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
    <h1>Cases</h1>
    <h2>{data.cases}</h2>
    <h1>Deaths</h1>
    <h1>{data.deaths}</h1>
    <h1>Recovered</h1>
    <h2>{data.recovered}</h2>
    </>
  );
}

export default App;
