import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";

class BookSearch extends Component {
  static propTypes = {
    searchedBooks: PropTypes.array.isRequired,
  };

  state = {
    searchQuery: "",
  };

  updateQuery = (query) => {
    this.setState(() => ({
      searchQuery: query,
    }));
    this.props.onSearchBooks(query);
  };

  render() {
    const { searchedBooks, onShelfChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button
              className="close-search"
              onClick={(event) => this.updateQuery("")}
            >
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map((searchedBook) => (
              <li key={searchedBook.id}>
                <Book bookInfo={searchedBook} onShelfChange={onShelfChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
