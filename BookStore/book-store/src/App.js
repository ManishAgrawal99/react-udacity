import React from 'react';
import './utils/bootstrap.css'
import './App.css';

import BookSection from './BookSection';

function App() {

    const Books = [
        {
            name: 'harry Potter',
            author: 'JK'
        },
        {
            name: 'XYZ',
            author: 'abx'
        },
        {
            name: 'lalalal',
            author: 'ajdhjdah'
        }
    ]

    return (
        <div className="App">
            <div className="container">
                <div className="row text-center">
                    <h1>My Reads</h1>
                </div>
                <BookSection secHead='Currently Reading' books={Books}/>
                <BookSection secHead='Want to Read' books={Books}/>
                <BookSection secHead='Read' books={Books}/>
            </div>
        </div>
    );
}

export default App;
