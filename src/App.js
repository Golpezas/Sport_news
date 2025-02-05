import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import BookmarksPage from './pages/BookmarksPage';
import SettingsPage from './pages/SettingsPage';
import Header from './components/Header';

function App() {
    return (
        <Router>
        <Header />
        <div className="container">
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;