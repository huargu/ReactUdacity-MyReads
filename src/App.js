import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookSearch from "./BookSearch";
import BookList from "./BookList";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    searchedBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books,
      }));
    });
  }

  searchBooks = (query) => {
    if (query.length > 2) {
      BooksAPI.search(query).then((books) => {
        this.setState({
          searchedBooks: Array.from(books),
        });
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <BookSearch
              searchedBooks={this.state.searchedBooks}
              onSearchBooks={this.searchBooks}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <BookList allBooks={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
