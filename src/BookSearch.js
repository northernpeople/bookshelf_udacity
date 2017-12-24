import React from 'react';
import * as BooksAPI from './BooksAPI';
import Shelf from "./Shelf.js";
import { Link } from 'react-router-dom'



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
    console.log(this.state);
  }


  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">

        <Link
          className="close-search"
          to='/'
        >Close</Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <Shelf books={this.state.books} bookshelfTitle="" changeCategory={this.props.changeCategory}/>
          </ol>
        </div>
      </div>
  )
  }
}
export default BookSearch;
