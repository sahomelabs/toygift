import React from "react";
function Index(props) {
  return (
    <>
     <nav>
        <a href="/fruits/new"><h1>Suggest Gift Toy</h1></a>
      </nav>
      <ul>
        <h1>
          {" "}
          {props.fruits.map((fruit, i) => {
            return (
              <li
                style={{
                  borderRadius: "22px",
                  margin: "1em",
                  border: " solid grey",
                  textAlign: "center",
                }}
              >
                {" "}
                <a href={`/fruits/${i}`}>{fruit.name} </a>{" "}
              </li>
            );
          })}
        </h1>
      </ul>
     
    </>
  );
}
export default Index;