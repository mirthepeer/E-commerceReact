import React from 'react'

function PlusMinus(props) {
  const [counter, setCounter] = React.useState(1)

  function add(){
    setCounter(value => value + 1)
  }
  
  function subtract(){
    setCounter(value => value - 1)
  }
  if(counter<1){
    setCounter(1)
  }
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    console.log(total)
  
  }, [total])
  
  
  function handClick(){
    setTotal(()=> total + (props.price * counter) )

   
   
  }
  
    return (
    <div>
      {counter===1 && <p className="card--price"><span className="bold">{Math.round((props.price + Number.EPSILON) * 100) / 100} </span> </p> }
      {counter>1 &&  <p className="card--price"><span className="bold"> {`$${props.price} x ${counter} = $${Math.round(((props.price*counter) + Number.EPSILON) * 100) / 100}`} </span> </p>}
      <div className="counter">
    <div className='qty'><small>Quantity</small></div> 
     <span className="counter__output">{counter}</span>
     <div className="btn__container">
       <button onClick={add} className="control__btn">+</button>
       <button onClick={subtract} className="control__btn" >-</button>
       </div>
       <button className='addToCart-btn' onClick={handClick}>Add to Cart</button>
   </div></div>
    
);
  
}

export default PlusMinus