import React, {useEffect} from 'react'

export default function News() {
    const key =process.env.REACT_APP_API_KEY
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;

    const url = `https://newsapi.org/v2/everything?q=COVID&from=${today}&sortBy=publishedAt&apiKey=${key}`

    useEffect(() => {
        fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data)
        });
    })
    return (
        <div>
            
        </div>
    )
}
