


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import './Player.css';

function PlayTopRatedMovie() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [trailerKey, setTrailerKey] = useState(null); // State to hold the trailer key
    const [trailername, setTrailername] = useState(null); // State to hold the trailer key
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
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
                const result = await response.json();
                console.log( 'upcoming movie' +result.results);
                setData(result.results);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [id]); // Added id to the dependency array

    useEffect(() => {
        if (data.length > 0) {
            // Find the official trailer key
            const officialTrailer = data.find(video => video.name === "Official Trailer");
            if (officialTrailer) {
                setTrailerKey(officialTrailer.key);
                console.log("top tated movie" +officialTrailer);
                setTrailername(officialTrailer.type);
            }
        }
    }, [data]);

    return (
        <Navbar>
            <div>
                <h1 className="trailer-heading">You Can Watch the My NetFlix Movie</h1>
                {trailerKey ? ( // Use trailerKey to conditionally render the iframe
                    
                    <div className="trailer-top">
                        <iframe className="trailer-video"
                        width="100%"
                        height="600px"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="trailer-type">
                        <strong>{trailername}</strong>
                    </div>
                        
                    </div>
                ) : (
                    <p>No videos found.</p>
                )}
            </div>
        </Navbar>
    );
}

export default PlayTopRatedMovie;
