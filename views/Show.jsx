import React from 'react'

function Show(props) {
  return (
    <>
        <h1>{props.fruit.name}</h1>Color
        <h1 style={{color:`${props.fruit.color}`}}>{props.fruit.color}</h1>
         <h1>{props.fruit.readyToEat? "Add to Cart" : " It needs a bit more time Before its Edible"}</h1>
    
    </>
  )
}

export default Show