import React, { Component } from 'react';

class BookSection extends Component {
    render() {
        const Books = this.props.books;
        const Head = this.props.secHead;
        const onChangeShelf = this.props.onChangeShelf;

        return (
            <div className='container'>
                <div className='row'>
                    <h2 className=''>{Head}</h2>
                </div>
                <hr></hr>
                <div className='row hori-book-display card-deck'>
                    {
                        Books.map((book) => (
                            <div className='card col-md-3' key={book.title}>
                                <img className='card-img-top' src={book.imageLinks.thumbnail} alt={book.title} />
                                <div className='card-body'>
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text"><small className="text-muted">{book.authors[0]}</small></p>
                                </div>
                                <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading" onClick={()=>{onChangeShelf(book, 'currentlyReading')}}>Currently Reading</option>
                                        <option value="wantToRead" onClick={()=>{onChangeShelf(book, 'wantToRead')}}>Want to Read</option>
                                        <option value="read" onClick={()=>{onChangeShelf(book, 'read')}}>Read</option>
                                        <option value="none" onClick={()=>{onChangeShelf(book, 'none')}}>None</option>
                                    </select>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        )
    }
}

export default BookSection;