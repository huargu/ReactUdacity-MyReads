import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookSearch from "./BookSearch";
import BookList from "./BookList";

class BooksApp extends React.Component {
  state = {
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
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        this.setState({
          searchedBooks: Array.from(books),
        });
      });
    } else {
      this.setState({
        searchedBooks: []
      })
    }
  };

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === 'none') {
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => (b.id !== book.id))
      }))
    } else {
      book.shelf = shelf
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => (b.id !== book.id)).concat(book)
      }))
    }
  }

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
              onShelfChange={this.shelfChange} 
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <BookList allBooks={this.state.books} onShelfChange={this.shelfChange} />}
        />
      </div>
    );
  }
}

export default BooksApp;
