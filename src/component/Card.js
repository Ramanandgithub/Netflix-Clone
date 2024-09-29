






import { useEffect, useState } from "react";
import './Card.css'; // Ensure to import your CSS file
import PopularMovie from "./PopularMovie";
import UpcomingMovie from "./UpcomingMovie";
import TopRated from "./TopRated";
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from "react-router-dom";

function Card() {
    const [data, setData] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Start loading as true

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
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
                const result = await response.json();

                // Check if result and result.results exist
                if (result && result.results) {
                    setData(result.results);
                } else {
                    console.error('No results found');
                }
            } catch (err) {
                console.error('Fetch error: ', err);
            } finally {
                setLoading(false); // Ensure loading state is updated
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Now Playing Movies</h1>
            {
                loading ? (
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
                    <div className="card-container">
                        {data.length > 0 ? (
                            data.map((value) => (
                                <div key={value.id} className="card"> {/* Use value.id as key for uniqueness */}
                                    <Link to={`/player/${value.id}`} className="wrapper">
                                        <img
                                            className="image_card"
                                            src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                                            alt="card image"
                                        />
                                        <h3 className="original_title">{value.original_title}</h3>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No movies found.</p> // Display message if no movies are available
                        )}
                    </div>
                )
            }

            <PopularMovie />
            <UpcomingMovie />
            <TopRated />
        </div>
    );
}

export default Card;

