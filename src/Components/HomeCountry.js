import React, { useEffect } from 'react'

export default function HomeCountry() {

    useEffect(()=> {
        fetch('http://ip-api.com/json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data)
        });
    },[])
    return (
        <div>
            
        </div>
    )
}
