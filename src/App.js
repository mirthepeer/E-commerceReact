import './App.css';
import './components/Items'
import Navbar from './components/Navbar'
import Items from './components/Items';
import React, {useEffect, useState}  from 'react'
import Test from './components/Test';



function App() {
  
  const [Products, setProducts] = useState([]) 

  const [total, setTotal] = useState(0)


    useEffect(() => {
      async function fetchData(){ 
        await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{setProducts(data)
          console.log(Products)
        })}
            fetchData()}, [])

  
    
  
  
  
      
            const currentProd = Products.map((item)=>
            <div className='my-container'>
               <Items key={item.id} items={item} />
            </div>
            )
  
 
  
  return (
   
   <div className='main-container'>
     <Navbar />
     <div className='boxes'>
     {currentProd}
  
    </div>
    
    
    {/* {Products && Products.map((item)=><Items key={item.id} items={item} />)} */}
  
 
   </div>
     

  )
}

export default App;
