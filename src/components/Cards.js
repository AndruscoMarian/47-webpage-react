import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards '>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-1.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, esse.'
                        label='Luxury'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-3.jpg'
                        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, esse.'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-4.jpg'
                        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, esse.'
                        label='Mountains'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-8.jpg'
                        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, esse.'
                        label='Adrenaline'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
