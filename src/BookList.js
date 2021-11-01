import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";


const bookShelves = [
  { key: 'currentlyReading', title: 'Currently Reading', priority: 1},
  { key: 'wantToRead', title: 'Want to Read', priority: 2},
  { key: 'read', title: 'Read', priority: 3}
];

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
            {
              bookShelves.sort((a, b) => (a.priority - b.priority))
                .map((shelf) => (
                  <Shelf
                    shelfTitle = { shelf.title }
                    shelfBooks={allBooks.filter(
                      (book) => book.shelf === shelf.key 
                    )}
                  />
                ))
            }
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
