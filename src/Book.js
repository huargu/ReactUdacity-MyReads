import React, { Component } from "react";
import PropTypes from "prop-types";
import BookMenu from "./BookMenu";

class Book extends Component {
  static propTypes = {
    bookInfo: PropTypes.object.isRequired,
  };

  render() {
    const { bookInfo } = this.props;
    let authorstring = ''
    if (bookInfo.authors) {
      authorstring = bookInfo.authors.join(', ')
    }
    else {
      authorstring = 'Unknown'
    }
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${bookInfo.imageLinks.thumbnail})`,
            }}
          />
          <BookMenu />
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">{authorstring}</div>
      </div>
    );
  }
}

export default Book;
