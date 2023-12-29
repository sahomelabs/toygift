import React from "react";

function New() {
  return (
    <>
      <h1>Create A New Toy</h1>
      <form action="/toys" method="POST"><br/>
        Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
        Color: <input  style={{margin:"1em"}}type="text" name="color" /><br/>
        AddToGiftBucketList: <input  style={{margin:"1em"}}type="checkbox" name="addToGiftBucketList" /><br/>
        <input style={{margin:"1em"}} type="submit" value="Add-To-List" />
      </form>
    </>
  );
}

export default New;