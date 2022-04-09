import React, { useEffect, useState } from "react";
import "./style.css"
import axios from "axios"

function News(){
    let[newses,setNews]=useState({})
    let[auth,setAuth]=useState("authors")
    let news;
    useEffect(()=>{
         function getNews(){
            let data= axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-03-30&sortBy=popularity&apiKey=ec6b4bc5ff204d26a444f942d3760edc");
            // console.log(data.data.articles[0].source.name)
            for(let i=0;i<=10;i++){
                news=data.data.articles[i];
                console.log(news)
                // var[fullNews]=news;
                // console.log(fullNews)
                // var{author,content,description,source}=fullNews;
                // console.log(author)
                // setAuth(author);
            }
        }
        getNews()
        // setName(news[0].source.name)
    })
    
    return(
        <div>
            <h2>{auth}</h2>
        </div>
    )
}
export default News;