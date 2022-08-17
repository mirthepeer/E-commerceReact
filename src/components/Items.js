import React from 'react'
import { color, Image, propNames } from '@chakra-ui/react'
import { Box, StarIcon, Badge} from '@chakra-ui/react'
import './Items.css'


function Items(props) {
     return (
      <div className="card">
      <img src={props.items.image} className="card--image" />
      <p className="card--title">{props.items.title}</p>
      <p className="card--price"><span className="bold"> ${props.items.price}</span> </p>
    

      <label for="quantity">Quantity</label>
      <select id="quantity" name="quantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      </select>
      
      
      <button>Add to Cart</button>
      
  </div>
)
  


}

export default Items