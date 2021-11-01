import React, { Component } from "react";
import PropTypes from "prop-types";
import BookMenu from "./BookMenu";

class Book extends Component {
  static propTypes = {
    bookInfo: PropTypes.object.isRequired,
  };

  render() {
    const { bookInfo, onShelfChange } = this.props;

    let authorstring = "";
    let thumbnail = "";

    if (bookInfo.authors) {
      authorstring = bookInfo.authors.join(", ");
    } else {
      authorstring = "Unknown";
    }

    if (bookInfo.imageLinks) {
      if (bookInfo.imageLinks.thumbnail) {
        thumbnail = bookInfo.imageLinks.thumbnail;
      }
    }
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${thumbnail})`,
            }}
          />
          <BookMenu
            book={bookInfo}
            shelf={bookInfo.shelf}
            onShelfChange={onShelfChange}
          />
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">{authorstring}</div>
      </div>
    );
  }
}

export default Book;
