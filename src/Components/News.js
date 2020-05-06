import React, { useEffect, useState } from 'react'

export default function News() {
    const key =process.env.REACT_APP_API_KEY
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;

    const url = `https://newsapi.org/v2/everything?q=COVID&from=${today}&sortBy=publishedAt?language=en&apiKey=${key}`

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setArticles(data.articles)
        });
    },[])

    console.log(articles[0])
    return (
        <div>
            
        </div>
    )
}
