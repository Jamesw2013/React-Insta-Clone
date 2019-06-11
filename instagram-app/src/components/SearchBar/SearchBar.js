import React from 'react';
import './SearchBar.css';

const SearchBar = props =>{
    return (
        <header className="searchbar-section">
            <div className="searchbar-logo-block">
                SearchBar
            </div>
            <form onSubmit={props.searchPosts}>
                <input 
                onChange={props.searchEventHandler}
                name="searchValue"
                type="text"
                placeholder="Search"
                />
            </form>

            <nav>
                <p>Stuff</p>
            </nav>

        </header>
    );
}

export default SearchBar;