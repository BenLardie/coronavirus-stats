import React from 'react'


export const AllCases = (props) => {
    return (
        <>
            <h1>Cases</h1>
            <h2>{props.data.cases}</h2>
            <h1>Deaths</h1>
            <h1>{props.data.deaths}</h1>
            <h1>Recovered</h1>
            <h2>{props.data.recovered}</h2>
        </>
    )
}