import React from 'react'
import Article from "./Article"





export const ArticleList = ({articles}) => {
    
    const theArticle =
        articles.map((posts) => {
        return <Article 
        key={posts.id} 
        title={posts.title} 
        date={posts.date} 
        preview={posts.preview} 
        minutes={posts.minutes}  
        />
        })
    
    return (
            <main>{theArticle}</main>
    )
}

export default ArticleList;
