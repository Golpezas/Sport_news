import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';

const HomePage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
    // Simulamos la carga de datos de noticias
        const fetchNews = async () => {
        const response = await fetch('https://api.example.com/sports-news');
        const data = await response.json();
        setNews(data.articles);
    };

    fetchNews();
    }, []);

    return (
        <div>
        <h1>Sports News</h1>
        <NewsList news={news} />
        </div>
    );
};

export default HomePage;