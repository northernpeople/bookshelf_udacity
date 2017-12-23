import React from 'react';
import * as BooksAPI from './BooksAPI';
import Shelf from "./Shelf.js";


import './App.css'


class BookSearch extends React.Component {

  state = {query: '', books: [] }
  updateQuery = (query) => {
    if(! query) this.setState({query: '', books: [] });
    else{
      BooksAPI.search(query).then(
          (books) => {
            console.log("got books", books);
            if(! books.error) {this.setState({books, query: query})}
            else {this.setState({query: query, books: [] }); }
           }
        );
    }
    console.log(this.state)

  }


  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Shelf books={this.state.books} bookshelfTitle="Found:" changeCategory={this.props.changeCategory}/>
          </ol>
        </div>
      </div>
  )
  }
}
export default BookSearch;
