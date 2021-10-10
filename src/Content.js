import { React, useState, useEffect } from "react";
import Movie from "./Movie";
import "./Content.css";
import axios from "axios";
function Content() {
  const [movie, setMovie] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [module, setModule] = useState(true);
  const getmovie = async (e) => {
    setMovie("");
    try {
      var options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/auto-complete",
        params: { q: movie },
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "66a3cec02bmsh71146793da9a5f6p13147ajsnfcfe23c601a5",
        },
      };
      let response = await axios.request(options);
      console.log(response.data);
      setModule(false);
      setMovieData(response.data.d);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {}, [module]);
  return (
    <>
      {module ? (
        <div className="container-fluid main d-flex justify-content-center align-items-center">
          <div
            className="d-flex flex-row justify-content-center align-items-center"
            style={{ opacity: "1 !important" }}
          >
            <input
              type="text"
              value={movie}
              placeholder="Your Movie is here...."
              onChange={(e) => setMovie(e.target.value)}
            />
            <button onClick={(e) => getmovie(e)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <Movie data={movieData} setModule={setModule} />
      )}
    </>
  );
}

export default Content;
