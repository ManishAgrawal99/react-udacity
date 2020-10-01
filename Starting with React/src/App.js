import React from 'react';


function ContactList({contacts}) {
        const people = contacts;
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

function App() {
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

export default App;
