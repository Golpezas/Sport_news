import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ news }) => {
    return (
        <div>
        <h2><Link to={`/details/${news.id}`}>{news.title}</Link></h2>
        <p>{news.description}</p>
        </div>
    );
};

export default NewsItem;