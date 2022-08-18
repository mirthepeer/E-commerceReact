import React from 'react'
import { color, Image, propNames } from '@chakra-ui/react'
import { Box, StarIcon, Badge} from '@chakra-ui/react'
import './Items.css'
import PlusMinus from './PlusMinus'


function Items(props) {


  


     return (
      <div className="card">
      <img src={props.items.image} className="card--image" />
      <p className="card--title">{props.items.title}</p>
      
      
      <PlusMinus price={props.items.price} />
      
      
      
      
      
  </div>
)
  


}

export default Items