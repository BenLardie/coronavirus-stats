import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dataGroup: {
      display: 'inline-block',
      padding: theme.spacing(2),
      margin: theme.spacing(2),
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

export default function DataCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.dataGroup}>
            <Typography variant="h5" className={classes.dataTitle}>{props.title}</Typography>
            <Typography variant="body2" color="textSecondary" className={classes.stat}>{props.data}</Typography>
        </Card>
    )
}
