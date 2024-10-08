import { useEffect, useState } from "react";
import './Card.css'; // Ensure to import your CSS file
import './Card.css';

function PopularMovie() {
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWFkMzgyNDQxZmZkNDc2MDM5MzU2ZGE1MGIzMjRjYSIsIm5iZiI6MTcyNzU4NTIzMC41NTM4MDIsInN1YiI6IjY2ZWZhMTI3MGVhODBkMWZlMzhkNTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.stUV7fWzzvBDLk0MaB6fr3Sq78EhzEPxzyjlm31G9XY'
        }
      };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div><h1>Popular Movies</h1></div>
            <div className="card-container">

                {

                    data.map((value, index) => (
                        <div key={index} className="card">
                            <div className="wrapper">
                                <img className="image_card" src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} height="300px" alt="card image" />
                                <h3 className="original_title">{value.original_title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PopularMovie;
