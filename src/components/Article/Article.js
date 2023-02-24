import React from "react"
import { Link } from "react-router-dom"
import  './Article.css';

const Article = ({id, cover, title}) => {
    return (
        <Link to={`/${id}`}> 
<article key={id} className="location"> 
      
        <img src={cover} alt={title}></img> 
        
        <span>{title}</span>        
        </article>
        </Link> 
    )
}

export default Article;