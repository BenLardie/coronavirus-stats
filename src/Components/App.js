import React, { useEffect, useState } from 'react';
import './App.css';
import { AllCases } from './AllCases';
import AllCountries from './AllCountries';
import HomeCountry from './HomeCountry'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

function App() {
  const [data, setData] = useState({})
  const [countryName, setCountryName] = useState(null)
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
      <Grid item xs={6}>
        <AllCases data={data} />
      </Grid>
      <Grid item xs={6}>
        <HomeCountry countryName={countryName} />
      </Grid>
      <Grid item xs={12}>
        <AllCountries />
      </Grid>
    </div>
  );
}

export default App;
