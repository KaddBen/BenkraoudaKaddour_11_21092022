import React from "react"
import { Link } from "react-router-dom"
import  './Article.css';

const Article = ({id, cover, title}) => {
    return (
<article key={id} className="location"> 
        <Link to={`/${id}`}> 
        <img src={cover}></img> 
        </Link> 
        <span>{title}</span>        
        </article>
    )
}

export default Article;