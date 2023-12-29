import React from 'react'

function Show(props) {
  return (
    <>
        <h1>{props.toy.name}</h1>Color
        <h1 style={{color:`${props.toy.color}`}}>{props.toy.color}</h1>
         <h1>{props.toy.readyToEat? "Add to Cart" : " You will get this product during next christmas holiday"}</h1>
    
    </>
  )
}

export default Show