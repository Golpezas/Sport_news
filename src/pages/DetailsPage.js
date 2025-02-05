import React, { useState, useEffect } from 'react';

const DetailsPage = ({ match }) => {
    const [news, setNews] = useState(null);
    const { id } = match.params;

    useEffect(() => {
    // Simulamos la carga de datos de una noticia específica
        const fetchNewsDetails = async () => {
        const response = await fetch(`https://api.example.com/sports-news/${id}`);
        const data = await response.json();
        setNews(data);
    };

    fetchNewsDetails();
    }, [id]);

    if (!news) return <p>Loading...</p>;

    return (
        <div>
        <h1>{news.title}</h1>
        <p>{news.content}</p>
        </div>
    );
};

export default DetailsPage;