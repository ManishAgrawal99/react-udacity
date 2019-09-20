import React from 'react';


class ContactList extends React.Component {
    render() {
        const people = this.props.contacts;

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
                <ContactList contacts={[
                    { name: 'Chandler' },
                    { name: 'Joey' },
                    { name: 'Ross' }
                ]} />

                <ContactList contacts={[
                    { name: 'Rachel' },
                    { name: 'Monica' }
                ]} />
            </div>
        );
    }
}

export default App;
