import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Math', age: 25},
      { name: 'Gab', age: 23},
      { name: 'Kath', age: 24}
    ],
    otherState: 'some random value'
  }

  switchNameHandler = (NewName) => {
    // console.log('click works');
    // Don't do this: this.state.persons[0].name = 'Matheus';
    this.setState({
      persons: [
        { name: NewName, age: 25},
        { name: 'Gabs', age: 23},
        { name: 'Kath', age: 21}
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Math', age: 25},
        { name: event.target.value, age: 23},
        { name: 'Kath', age: 21}
      ] 
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return ( 
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is working!</p>
        <button 
          style={style} //this has some limitations, could use the css file normally
          onClick={() => this.switchNameHandler('Matheus')}>Switch Name</button>  
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Matheus!!')}
            changed={this.nameChangedHandler}>My Hobbies: Games</Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this works??'));
  }
}

export default App;
