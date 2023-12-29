import React from 'react'

function Show(props) {
  return (
    <>
        <h1>{props.fruit.name}</h1>Color
        <h1 style={{color:`${props.fruit.color}`}}>{props.fruit.color}</h1>
         <h1>{props.fruit.readyToEat? "Add to Cart" : " You will get this product during next christmas holiday"}</h1>
    
    </>
  )
}

export default Show