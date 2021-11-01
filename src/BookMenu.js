import React, { Component } from "react";

class BookMenu extends Component {
  state = {
    shelf: this.props.shelf == null ? "none" : this.props.shelf,
  };

  shelfChange = (shelfVal) => {
    this.setState({
      shelf: shelfVal,
    });
    this.props.onShelfChange(this.props.book, shelfVal);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.shelf}
          onChange={(event) => this.shelfChange(event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookMenu;
