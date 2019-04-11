import React, {Component} from 'react';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';
import PropTypes from 'prop-types';

 
class Persons extends Component {
render() {
      return this.props.persons.map((person, index) => { // index numero de la boucle 
        return <Person
          click={() => this.props.Clicked(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          // Event contient lentre de linput 
          changed={(event) => this.props.changedd(event, person.id)} />
          } );
}
}

Persons.PropTypes = {
  name : PropTypes.string,
  age: PropTypes.number,
  };

export default Persons;