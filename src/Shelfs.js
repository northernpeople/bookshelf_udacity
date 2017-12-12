import React from 'react'
import Shelf from "./Shelf.js"


import './App.css'

class Shelfs extends React.Component {


  render (){
    var currently = this.props.books.filter( (e) => e.shelf === "currentlyReading");;
    var wantTo = this.props.books.filter( (e) => e.shelf === "wantToRead");
    var read  = this.props.books.filter( (e) => e.shelf === "read");

    return (
       <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content"><div>
            <Shelf books={currently} bookshelfTitle="Currently Reading" changeCategory={this.props.changeCategory}/>
            <Shelf books={wantTo} bookshelfTitle="Want to Read" changeCategory={this.props.changeCategory}/>
            <Shelf books={read}  bookshelfTitle="Read" changeCategory={this.props.changeCategory}/>
        </div></div>
        <div className="open-search">
          <a>Add a book</a>
        </div>
      </div>
    );
  }
}


export default Shelfs;
