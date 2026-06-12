import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    if (!search.trim()) return;

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${search}`
    );

    const data = await response.json();

    setBooks(data.docs.slice(0, 12));
  };

  return (
    <div className="container">
      <h1>📚 Book Finder</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        searchBooks={searchBooks}
      />

      <div className="books-container">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;