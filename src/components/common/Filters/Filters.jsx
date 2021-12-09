import React from 'react'
import './filter.css'
import FilterItem from './FilterItem/FilterItem'

 

const Filters = ({filterlist}) => {
    return (
        <div className='filters' >
             {
                filterlist && filterlist.map((filter)=>(
                     <FilterItem  filter={filter} key={filter.id }/>   
                ))
             }
        </div>
    ) 
}

export default Filters
