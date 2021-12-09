import React from 'react'
import './DelivaryItem.css'
const DelivaryItem = ({item}) => {
    return (
        <div>
            <div className='delivary-item-cover'>
                <img src={item.cover} alt={item.title} className='delivary-item-image'/>
            </div>
            <div className='delivary-item-title'>{item.title} </div>
        </div>
    )
}

export default DelivaryItem
