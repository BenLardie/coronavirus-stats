import React, { useEffect, useState } from 'react'

export default function HomeCountry() {

    const [countryName, setCountryName] = useState(null)
    const [countryStats, setCountryStats]= useState(null)
    
    useEffect(()=> {
        fetch('http://ip-api.com/json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCountryName(data.country)
        });
    },[])
    
    useEffect(()=> {
        fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCountryStats(data)
        });
    },[countryName])
    console.log(countryStats)
    return (
        <div>
            
        </div>
    )
}
