import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DataCard from './DataCard'
import AppBar from '@material-ui/core/AppBar';
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
}));


export const AllCases = (props) => {
  const classes = useStyles();
  const dataCards = [{ title: 'Cases', data: props.data.cases }, { title: 'Deaths', data: props.data.deaths }, { title: 'Recovered', data: props.data.recovered },]
  return (
    <Paper elevation={3} className={classes.paper}>
        <AppBar position="static">
          <Typography variant="h3">
                World Cases 
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