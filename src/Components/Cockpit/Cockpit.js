import React from 'react';
import '../../containers/App.css';

const Cockpit = ( props ) => {

    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    let classes = ['red', 'Blod'].join(' ');
    
    return (
        <div>
        <h1>Hi Islam, I'm a React App</h1>
        <p className ={classes} >This is really working!</p>
        <button style={style}
          onClick = {props.clicked}>Toggle Persons</button>
        </div>
    );
} ;

export default Cockpit;