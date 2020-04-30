import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export default function AllCountries() {
    const [countriesData, setCountriesData] = useState([])
    const { flag } = require('country-emoji');

    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
        },
    });

    const classes = useStyles();

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries ')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCountriesData(data)
            });
    }, [])

    const columns = [
        { id: 'country', label: 'Country Name', maxWidth: 170 },
        { id: 'cases', label: 'Cases', maxWidth: 170 },
        { id: 'casesToday', label: 'Cases Today', maxWidth: 170 },
        { id: 'deaths', label: 'Deaths', maxWidth: 170 },
        { id: 'deaths', label: 'Deaths Today', maxWidth: 170 },
        { id: 'recovered', label: 'Recovered', maxWidth: 170 },
        { id: 'active', label: 'Active', maxWidth: 170 },
        { id: 'critical', label: 'Critical', maxWidth: 170 },
    ]

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ maxWidth: column.maxWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countriesData.map((countryObject, index = 0) => {
                            const { country, cases, todayCases, deaths, todayDeaths, recovered, active, critical } = countryObject
                            index++
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={country}>
                                    <TableCell style={{ maxWidth: 170 }}>{country}{flag(country)}</TableCell>
                                    <TableCell style={{ maxWidth: 170 }}>{cases}</TableCell>
                                    <TableCell style={{ maxWidth: 170 }}>{todayCases}</TableCell>
                                    <TableCell style={{ maxWidth: 170 }}>{deaths}</TableCell>
                                    <TableCell style={{ maxWidth: 170 }}>{todayDeaths}</TableCell>
                                    <TableCell style={{ maxWidth: 170 }}>{recovered}</TableCell>
                                    <TableCell style={{ maxWidth: 170 }}>{active}</TableCell>
                                    <TableCell style={{ maxWidth: 170 }}>{critical}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
