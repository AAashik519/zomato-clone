import React from 'react'
import { restaurants } from '../../../data/restaurants'
import './explore.css'
import ExploreCard from './ExploreCard/ExploreCard'
const Explore = ({list, collectionName}) => {
    return (
        <div className='max-width explore-section'>
          <div className='collection-title'>{collectionName}</div>
          <div className='explore-grid'>
            {
                list.map((restaurant ,i)=>(
                    <ExploreCard restaurant={restaurant}  i={i}/>
                ))
            }
          </div>  
        </div>
    )
}

export default Explore
