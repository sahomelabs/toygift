import React from "react";

function New() {
  return (
    <>
      <h1>Create A New Fruit</h1>
      <form action="/fruits" method="POST"><br/>
        Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
        Color: <input  style={{margin:"1em"}}type="text" name="color" /><br/>
        Ready2Eat: <input  style={{margin:"1em"}}type="checkbox" name="readyToEat" /><br/>
        <input style={{margin:"1em"}} type="submit" value="Create Fruit" />
      </form>
    </>
  );
}

export default New;