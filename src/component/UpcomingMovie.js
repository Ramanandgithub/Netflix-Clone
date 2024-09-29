



import { useEffect, useState } from "react";
import './UpcomingMovie.css'; // Ensure to import your CSS file
import { ThreeCircles } from 'react-loader-spinner';

function UpcomingMovie() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true initially


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
                const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
                const result = await response.json();
                setData(result.results);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, []);

    console.log("Upcoming movie data:", data);

    return (
        <div>
            <div><h1>Upcoming Movies</h1></div>
            <div className="card-container">
                {loading ? (
                    <ThreeCircles
                        visible={true}
                        height="100"
                        width="100"
                        color="#4fa94d"
                        ariaLabel="three-circles-loading"
                    />
                ) : (
                    data.map((value, index) => (
                        <div key={index} className="card">
                            <div className="wrapper">
                                <img
                                    className="image_card"
                                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                                    height="300px"
                                    alt="card image"
                                />
                                <h3 className="original_title">{value.original_title}</h3>
                                <span>Release Date - {value.release_date}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default UpcomingMovie;

