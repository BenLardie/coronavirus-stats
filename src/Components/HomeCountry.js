import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  dataGroup: {
    display: 'inline-block',
    paddingBottom: '10px',
  },
  dataTitle: {
    display: 'inline-block',
    padding: '0 10px',
    margin: '0',
  },
  stat: {
    display: 'block',
    margin: '0',
  }
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

  const { country, cases, todayCases, active, casesPerOneMillion, critical, deathsPerOneMillion,
    recovered, testsPerOneMillion, deaths, todayDeaths, totalTests } = countryStats

  const dataCards = [{ data: country, title: 'Country' }, { data: cases, title: 'Cases' }, { data: todayCases, title: 'Cases Today' }, { data: active, title: 'Active' },
  { data: casesPerOneMillion, title: 'Cases Per 1M' }, { data: critical, title: 'Critical' }, { data: deathsPerOneMillion, title: 'Deaths' },
  { data: recovered, title: 'Recovered' }, { data: testsPerOneMillion, title: 'Test Per 1M' }, { data: deaths, title: 'Deaths' }, { data: todayDeaths, title: 'Deaths Today' }, { data: totalTests, title: 'Total Test' }]
  console.log(country)

  return (
    <Paper elevation={3} key={country} className={classes.paper}>
      <h1>{country}</h1>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Cases</Typography><p>{cases}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Today Cases</Typography><p>{todayCases}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Active</Typography><p>{active}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Cases per 1 Million</Typography><p>{casesPerOneMillion}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Critical</Typography><p>{critical}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Recovered</Typography><p>{recovered}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Deaths</Typography><p>{deaths}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Deaths Today</Typography><p>{todayDeaths}</p>
      </div>
      <div className={classes.dataGroup}>
        <Typography variant="h4" className={classes.dataTitle}>Total Test</Typography><p>{totalTests}</p>
      </div>
    </Paper>
  )
}
