import React, {useEffect, useState} from "react";
import { json } from "react-router-dom";
import News from "./News";

function NewsApp(){
    const apiKey = "97a385ecef12465ab7352cc922bc043d";
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-08&sortBy=publishedAt&apiKey=${apiKey}`;
    const [newsList, setNewsList] = useState([]);


    useEffect( ()=>{
        fetchData();
    },[]);

    async function fetchData(){
        try{
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setNewsList(jsonData.articles);
        }catch(e){
            console.log(e);
        }

    }

    return(
        <div style = {{display: 'grid', gridTemplateColumns:'repeat(3, 30%)', justifyContent: 'space-between', rowGap : '20px'
}}>
        {newsList.map( news => {
            return <News news = {news}/>
        })}
        </div>
    );
}

export default NewsApp;