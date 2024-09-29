


import { useEffect, useState } from "react";
import './Card.css'; // Ensure to import your CSS file

import { ThreeCircles } from 'react-loader-spinner'

function TopRated() {
    const [data, setData] = useState([]);
    const [more, setMore] = useState(false);
    const [loading, setLoading] = useState(false);


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWFkMzgyNDQxZmZkNDc2MDM5MzU2ZGE1MGIzMjRjYSIsIm5iZiI6MTcyNzU4NTIzMC41NTM4MDIsInN1YiI6IjY2ZWZhMTI3MGVhODBkMWZlMzhkNTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.stUV7fWzzvBDLk0MaB6fr3Sq78EhzEPxzyjlm31G9XY'
        }
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
                const result = await response.json();
                setData(result.results);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleDescription = (index) => {
        setMore((prevMore) => (prevMore === index ? false : index));
    };

    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Top Rated Movies</h1>
            <div className="card-container">
                {loading ? (
                    <ThreeCircles
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                ) : (
                    data.map((value, index) => (
                        <div key={index} className="card">
                            <div className="wrapper">
                                <img
                                    className="image_card"
                                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                                    alt="card image"
                                />
                                <h3 className="original_title">{value.original_title}</h3>
                                <span>Release Date: {value.release_date}</span>

                                <p>
                                    {more === index ? value.overview : `${value.overview.substring(0, 20)}...`}
                                </p>

                                <span
                                    style={{ color: "blue", cursor: "pointer" }}
                                    onClick={() => toggleDescription(index)}
                                >
                                    {more === index ? "Hide Description" : "Show Description"}
                                </span>

                                <p>Rating: <strong>{value.vote_average}</strong></p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default TopRated;
