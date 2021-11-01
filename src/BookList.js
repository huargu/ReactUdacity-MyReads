import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class BookList extends Component {
  static propTypes = {
    allBooks: PropTypes.array.isRequired,
  };

  render() {
    const { allBooks } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfTitle="Currently Reading"
              shelfBooks={allBooks.filter(
                (book) => book.shelf === "currentlyReading"
              )}
            />
            <Shelf
              shelfTitle="Want to Read"
              shelfBooks={allBooks.filter(
                (book) => book.shelf === "wantToRead"
              )}
            />
            <Shelf
              shelfTitle="Read"
              shelfBooks={allBooks.filter((book) => book.shelf === "read")}
            />
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
