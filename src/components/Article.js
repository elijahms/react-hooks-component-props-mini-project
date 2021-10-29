import React from 'react'



export const Article = ({title, date = "January 1, 1970", preview, minutes}) => {
    
    function minuteCounter(minutes) {
        let coffeeCup = '☕️'
        let bentoBox = "🍱"
        let numberOfCups = Math.round(minutes / 5)
        let numberOfBento = Math.ceil(minutes / 10)

        if (minutes < 30) {
            coffeeCup = coffeeCup.repeat(numberOfCups)
            return coffeeCup
        } else {
            numberOfBento = bentoBox.repeat(numberOfBento)
            return numberOfBento
        }

    }


    return (
        <div>
            <article>
                <h3>{title}</h3>
                <small> {date} {minuteCounter(minutes)} {minutes} min read </small>
                <p> {preview} </p>
            </article>
        </div>
    )
}

export default Article;