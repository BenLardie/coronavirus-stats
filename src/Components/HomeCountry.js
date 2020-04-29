import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function HomeCountry() {

    const [countryName, setCountryName] = useState(null)
    const [countryStats, setCountryStats]= useState(null)
    const classes = useStyles();
    
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

    const displayData = countryStats.map(countryData => {
    const {country, cases,todayCases, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testsPerOneMillion, deaths, todayDeaths, totalTests } = countryData
    return (
      <>
        <h1>{{country}}</h1>
      </>
    )
  })
    return (
      <Paper className={classes.paper}>

      </Paper>
    )
}
