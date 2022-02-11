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
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Home;