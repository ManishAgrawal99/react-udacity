import React from 'react';


class ContactList extends React.Component {
    render() {
        const people = [
            {name: 'Chandler'},
            {name: 'Joey'},
            {name: 'Ross'}
        ]

        return (
            <ol>
                {
                    people.map((person) => (
                        <li key={person.name}>{person.name}</li>
                    ))
                }
            </ol>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ContactList />
            </div>
        );
    }
}

export default App;
