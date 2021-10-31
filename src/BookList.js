import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class BookList extends Component {
  static propTypes = {
    allBooks: PropTypes.array.isRequired,
  };

  render() {
    const filteredBooks = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };

    const { allBooks } = this.props;

    filteredBooks.currentlyReading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    filteredBooks.wantToRead = allBooks.filter(
      (book) => book.shelf === "wantToRead"
    );
    filteredBooks.read = allBooks.filter((book) => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfTitle="Currently Reading"
              shelfBooks={filteredBooks.currentlyReading}
            />
            <Shelf
              shelfTitle="Want to Read"
              shelfBooks={filteredBooks.wantToRead}
            />
            <Shelf shelfTitle="Read" shelfBooks={filteredBooks.read} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BookList;
