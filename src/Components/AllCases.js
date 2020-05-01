import React from 'react'
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


export const AllCases = (props) => {
    const classes = useStyles();
    return (
        <Paper  elevation={3} className={classes.paper}>
            <h1>Cases</h1>
            <h2>{props.data.cases}</h2>
            <h1>Deaths</h1>
            <h1>{props.data.deaths}</h1>
            <h1>Recovered</h1>
            <h2>{props.data.recovered}</h2>
        </Paper>
    )
}