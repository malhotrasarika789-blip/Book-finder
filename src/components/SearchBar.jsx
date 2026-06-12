function SearchBar({ search, setSearch, searchBooks }) {
    return (
    <div className="search-bar">
        <input type="text" placeholder="Search books..." value={search}
        onChange={(e) =>
            setSearch(e.target.value)
        }
        />

        <button onClick={searchBooks}>
        Search
        </button>
    </div>
    );
}

export default SearchBar;