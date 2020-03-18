import React, { useState, useEffect } from 'react'

export default function AllCountries() {
    const [countriesData, setCountriesData] = useState([])
    const { flag } = require('country-emoji');
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
            <table>
    <thead>
        <tr>
            <th colSpan="1">Country Name</th>
            <th colSpan="1">Cases</th>
            <th colSpan="1">Cases Today</th>
            <th colSpan="1">Deaths</th>
            <th colSpan="1">Deaths Today</th>
            <th colSpan="1">Recovered</th>
            <th colSpan="1">Active</th>
            <th colSpan="1">Critical</th>
        </tr>
    </thead>
    <tbody>
    {countriesData.map(countryObject => {
                const {country, cases, todayCases, deaths, todayDeaths, recovered, active, critical} = countryObject
                return (
                <tr>
                <td>{country}{flag(country)}</td>
                <td>{cases}</td>
                <td>{todayCases}</td>
                <td>{deaths}</td>
                <td>{todayDeaths}</td>
                <td>{recovered}</td>
                <td>{active}</td>
                <td>{critical}</td>
                </tr>
                )
            })}
    </tbody>
</table>

        </div>
    )
}
