import { React } from "react";
import background from "./background.jpg";
function Movie(props) {
  return (
    <>
      <button
        className="mt-2"
        onClick={(e) => {
          props.setModule(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="red"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
      </button>
      <div
        className="container-fluid d-flex flex-row"
        style={{ flexWrap: "wrap", marginBottom: "100px" }}
      >
        {props.data.map((item, index) => {
          return (
            <div
              style={{
                margin: "5%",
              }}
              key={index}
            >
              <div className="card" style={{ width: "18rem" }}>
                {Object.keys(item).includes("i") ? (
                  <img
                    className="card-img-top"
                    style={{ height: "300px" }}
                    src={item.i.imageUrl}
                    alt="Card"
                  />
                ) : (
                  <img
                    alt="asdfg"
                    className="card-img-top"
                    style={{ height: "300px" }}
                    src={background}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    {item.l}
                    {item.y ? (
                      <span style={{ marginLeft: "10px" }}>({item.y})</span>
                    ) : null}
                  </h5>
                  <p className="card-text">Ranking : {item.rank}</p>
                  <p>Actor / Actress : {item.s} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Movie;
