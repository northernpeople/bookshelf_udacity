import React from 'react'
import { Route } from 'react-router-dom'

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
    showSearchPage: true
  }


  changeCategory = (book, event) => {
      console.log(book);
      console.log(event.target.value);
      var booksNew = this.state.books.slice(0);
      for(var i = 0; i < booksNew.length; i++){
        if(booksNew[i].id === book.id){
          booksNew[i].shelf = event.target.value;
        }
      }
     this.setState({ books: booksNew }  );
    };


  componentDidMount() {
    BooksAPI.getAll().then( (books) => { this.setState({ books }) } )
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/search' render={() => (
          <BookSearch changeCategory={this.changeCategory}/>
        )}/>
        <Route path='/' render={() => (
          <Shelfs books={this.state.books} changeCategory={this.changeCategory} />
        )}/>

      </div>
    )
  }
}

export default BooksApp
