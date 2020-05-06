import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import NewsCard from './NewsCard'

export default function NewsFeed() {
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
        <Paper>
            {articles.map(article => {
                return (
                    <NewsCard article={article} />
                )
            })}
        </Paper>
    )
}
