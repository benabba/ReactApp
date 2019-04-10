import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // pour dupliquer la table 
    persons.splice(personIndex, 1); // permet de supprimer une ligne de la table 
    this.setState({persons: persons}); // updater le table 
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // index numero de la boucle 
            return <ErrorBoundary key={person.id}> <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              //key={person.id}
              // Event contient lentre de linput 
              changed={(event) => this.nameChangedHandler(event, person.id)} /></ ErrorBoundary>
          })}
        </div>
      );
      style.backgroundColor = "Red"
    }

        let classes = ['red', 'Blod'].join(' ');
    const classes2 = [];
    if (this.state.persons.length <=2 )
    {classes.push('red');
    }
    if (this.state.persons.length <= 1)
    {
      classes.push('Blod');
    }

    return (
      <div className="App">
        <h1>Hi Islam, I'm a React App</h1>
        <p className ={classes} >This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App; 