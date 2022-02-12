import React, { useEffect, useState } from 'react';

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    <h1>Welcome to our Homepage</h1>
    useEffect(() => {
        fetch("http://127.0.0.1:5000/entertainment")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setData(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <p>
                {data.map(item => (
                    <p key={item.id}>
                        <img
                            src={`https://images.justwatch.com/poster/${item.poster.replace(/[^0-9]/g, "")}/s592`}
                            id="imageBox" alt={`${item.title}`}></img>
                    </p>
                ))}
            </p>
        );
    }
}

export default Home;