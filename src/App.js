import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookSearch from "./BookSearch.js"
import Shelfs from "./Shelfs.js"

import './App.css'

class BooksApp extends React.Component {
  state = {
    books : [] ,
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }


  changeCategory = (book, event) => {
      console.log(book);
      console.log(event.target.value);
      this.setState({ books: [] }  );
    };


  componentDidMount() {
    BooksAPI.getAll().then( (books) => { this.setState({ books }) } )
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? ( <BookSearch/> ) : ( <Shelfs books={this.state.books} changeCategory={this.changeCategory} />) }
      </div>
    )
  }
}

export default BooksApp
