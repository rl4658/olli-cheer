import React, { useEffect, useState } from 'react'
import EventCard from './EventCard';


export default function CreateCards() {
    const [cards, setCards] = useState([])
    const [cardsData, setCardsData] = useState([])


    function createCard(card) {
        setCards(prev => [...prev, <EventCard title={card.title} URL={getURL(card.title)} description={card.description} />]);
    }
    // Fetch data from API and store it in the cards state variable
    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => {
                setCardsData(data)

            })
    }, [])

    useEffect(() => {
        if (cardsData.length > 0) {
            for (const card of cardsData) {
                createCard(card);
            }
        }

    }, [cardsData])

    return (
        <div></div>
    )

}
