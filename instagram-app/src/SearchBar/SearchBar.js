import React from 'react';
import './SearchBar.css';

const SearchBar = props =>{
    return (
        <header className="searchbar-section">
            <div className="searchbar-logo-block">
                SearchBar
            </div>
            <input 
                type="text"
                placeholder="Search"
            />
            <nav>
                <p>Stuff</p>
            </nav>

        </header>
    );
}

export default SearchBar;