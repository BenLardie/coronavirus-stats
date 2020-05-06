import React, { useEffect, useState } from 'react';
import { AllCases } from './AllCases';
import AllCountries from './AllCountries';
import HomeCountry from './HomeCountry'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Scroll from './Scroll'
import News from './NewsFeed';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
    zIndex: 2,
  },
  grid: {
    marginTop: '100px'
  }
}));

function App() {
  const [data, setData] = useState({})
  const [countryName, setCountryName] = useState('')
  const classes = useStyles();

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
    fetch('http://ip-api.com/json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountryName(data.country)
      });
  }, [])

  return (
    <div className={classes.root}>
      <Scroll>
        <AppBar position="fixed">
        <Typography variant="h1" className={classes.title}>
              COVID-19 Stats
        </Typography>
        </AppBar>
      </Scroll>
      <Grid className={classes.grid} container spacing={0}>
        <Grid item xs={6}>
          <AllCases data={data} />
        </Grid>
        <Grid item xs={6}>
          <News />
        </Grid>
        <Grid item xs={6}>
          {countryName.length > 0 && <HomeCountry countryName={countryName} />
          }
        </Grid>
        <Grid item xs={12}>
          <AllCountries />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
