import React, {useEffect} from 'react'

export default function News() {
    const key =process.env.REACT_APP_API_KEY
    const url = `http://newsapi.org/v2/everything?q=COVID&from=2020-04-31&sortBy=popularity&apiKey=${key}`

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
