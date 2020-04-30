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
        {id: 'country', label: 'Country Name', minWidth: 170},
        {id: 'cases', label: 'Cases', minWidth: 170},
        {id: 'casesToday', label: 'Cases Today', minWidth: 170},
        {id: 'deaths', label: 'Deaths Today', minWidth: 170},
        {id: 'recovered', label: 'Recovered', minWidth: 170},
        {id: 'active', label: 'Active', minWidth: 170},
        {id: 'critical', label: 'Critical', minWidth: 170},
    ]

    return (
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th colSpan="1">Country Name</th>
        //                 <th colSpan="1">Cases</th>
        //                 <th colSpan="1">Cases Today</th>
        //                 <th colSpan="1">Deaths</th>
        //                 <th colSpan="1">Deaths Today</th>
        //                 <th colSpan="1">Recovered</th>
        //                 <th colSpan="1">Active</th>
        //                 <th colSpan="1">Critical</th>
        //             </tr>
        //         </thead>
        //          <TableBody>
        //             {countriesData.map((countryObject, index = 0) => {
        //                 const { country, cases, todayCases, deaths, todayDeaths, recovered, active, critical } = countryObject
        //                 index++
        //                 return (
        //                     <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        //                         <TableCell>{country}{flag(country)}</TableCell>
        //                         <TableCell>{cases}</TableCell>
        //                         <TableCell>{todayCases}</TableCell>
        //                         <TableCell>{deaths}</TableCell>
        //                         <TableCell>{todayDeaths}</TableCell>
        //                         <TableCell>{recovered}</TableCell>
        //                         <TableCell>{active}</TableCell>
        //                         <TableCell>{critical}</TableCell>
        //                      </TableRow>
        //                 )
        //             })}
        //          </TableBody>
        //     </table>

        // </div>
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
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
                                 <TableCell>{country}{flag(country)}</TableCell>
                                 <TableCell>{cases}</TableCell>
                                 <TableCell>{todayCases}</TableCell>
                                 <TableCell>{deaths}</TableCell>
                                 <TableCell>{todayDeaths}</TableCell>
                                 <TableCell>{recovered}</TableCell>
                                 <TableCell>{active}</TableCell>
                                 <TableCell>{critical}</TableCell>
                              </TableRow>
                         )
                     })}
                  </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )
}
