import React, { useState, useEffect } from 'react'

export default function AllCountries() {
    const [countriesData, setCountriesData] = useState([])
    const {flag, code, name, countries} = require('country-emoji');
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries ')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setCountriesData(data)
          });
      }, [])

    return (
        <div>
            {countriesData.map(country => {
                console.log(country)
                return (
                <h1>{country.country}{flag(country.country)}</h1>
                )
            })}
        </div>
    )
}
