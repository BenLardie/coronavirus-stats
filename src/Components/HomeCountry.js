import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DataCard from './DataCard'
import AppBar from '@material-ui/core/AppBar';


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
  { data: casesPerOneMillion, title: 'Cases Per 1M' }, { data: critical, title: 'Critical' }, { data: deathsPerOneMillion, title: 'Deaths Per 1M' },
  { data: recovered, title: 'Recovered' }, { data: testsPerOneMillion, title: 'Test Per 1M' }, { data: deaths, title: 'Deaths' }, { data: todayDeaths, title: 'Deaths Today' }, { data: totalTests, title: 'Total Test' }]
  console.log(country)

  return (
    <Paper elevation={3} key={country} className={classes.paper}>
        <AppBar position="static">
        <Typography variant="h3">
              Home Country
        </Typography>
        </AppBar>
      {dataCards.map(card => {
        return (
          <DataCard title={card.title} data={card.data} />
        )
      })}
    </Paper>
  )
}
