import React, { Component } from 'react';
import './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import Persons from '../Components/Persons/Persons';

class App extends Component {

  constructor( props ) {
    super( props );
    console.log( '[App.js] Inside Constructor', props );
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    };
  }

/*   state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: '28' },
      { id: 'vasdf1', name: 'Manu', age: 29 }, 
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  } */

  /// Componenet Life cycle
  componentWillMount () {
    console.log( '[App.js] Inside componentWillMount()' );
  }
  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }
  // shouldComponentUpdate ( nextProps, nextState ) {
  //   console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }
  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
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
/* 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  } */
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( ( prevState, props ) => { // PrevState --> to make it asyn or somethig like that
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    } );
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
            <Persons clicked ={this.deletePersonHandler}
                    changedd ={this.nameChangedHandler}
                    persons = {this.state.persons}/>
        </div>
      );
      style.backgroundColor = "Red"
    }
   
    return (
      <div className="App">
      <Cockpit clicked = {this.togglePersonsHandler} />
      
        {persons}
      
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App; 