import React from 'react'

function PlusMinus() {
  const [counter, setCounter] = React.useState(0)

  function add(){
    setCounter(value => value + 1)
  }
  
  function subtract(){
    setCounter(value => value - 1)
  }
  if(counter<0){
    setCounter(0)
  }
  
    return (
    <div className="counter">
   <div className='qty'><small>Quantity</small></div> 
    <span className="counter__output">{counter}</span>
    <div className="btn__container">
      <button onClick={add} className="control__btn">+</button>
      <button onClick={subtract} className="control__btn" >-</button>
    </div>
  </div>
);
  
}

export default PlusMinus