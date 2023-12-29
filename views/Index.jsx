import React from "react";
function Index(props) {
  return (
    <>
     <nav>
        <a href="/toys/new"><h1>Suggest Gift Toy</h1></a>
      </nav>
      <ul>
        <h1>
          {" "}
          {props.toys.map((toy, i) => {
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
                <a href={`/toys/${i}`}>{toy.name} </a>{" "}
              </li>
            );
          })}
        </h1>
      </ul>
     
    </>
  );
}
export default Index;