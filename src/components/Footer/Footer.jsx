import React from 'react'
import './footer.css';

export const Footer = () => {
    const today = new Date()
    console.log(today)
    return (
        today &&
        <footer>
            <p> {today.toDateString()}</p>
        </footer>)
}
