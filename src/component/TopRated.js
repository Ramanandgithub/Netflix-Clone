import { useEffect, useState } from "react";
import './Card.css'; // Ensure to import your CSS file

function TopRated() {
    const [data, setData] = useState([]);
    const [more, setMore] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer YOUR_API_KEY' // Replace with your actual API key
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
                const result = await response.json();
                setData(result.results);
            } catch (err) {
                console.error(err);
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
                {data.map((value, index) => (
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

                            <span style={{ color: "blue", cursor: "pointer" }} onClick={() => toggleDescription(index)}>
                                {more === index ? "Hide Description" : "Show Description"}
                            </span>

                            <p>Rating: <strong>{value.vote_average}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopRated;
