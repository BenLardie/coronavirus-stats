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

export default function HomeCountry(props) {

  const [loading, setLoading] = useState(true)
  const [countryStats, setCountryStats] = useState([])
  const classes = useStyles();

  async function getHome(url) {
    let response = await fetch(url);
    let data = await response.json()
    return setCountryStats(data);
}

  useEffect(() => {
    getHome(`https://coronavirus-19-api.herokuapp.com/countries/${props.countryName}`)
  }, [props.countryName])
  console.log(countryStats)

  const displayData = () =>  { 
    if(countryStats) 
{    countryStats.map(countryData => {
    const { country, cases, todayCases, active, casesPerOneMillion, critical, deathsPerOneMillion,
      recovered, testsPerOneMillion, deaths, todayDeaths, totalTests } = countryData
    return (
        <h1>{{ country }}</h1>
    )
  })}
  }
  return (
    <Paper className={classes.paper}>
    { countryStats && displayData()}
    </Paper>
  )
}
