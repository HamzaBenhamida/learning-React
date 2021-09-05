import React from 'react';
import ReactDOM from 'react-dom';

/*
Setting Initial State
*/
class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { title: 'Best App' };
	}
		
	  render() {
	    return (
	      <h1>
		Wow this entire app is just an h1.
	      </h1>
	    );
	  }
}

/*
Access a Component's state
*/
class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { title: 'Best App' };
	}
		
	  render() {
	    return (
	      <h1>{this.state.title}</h1>
	    );
	  }
	}
	
ReactDOM.render(<App/>, document.getElementById('app'));

/*
Update state with this.setState
*/

/*
Call this.setState from Another Function
*/
const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
  const newColor = this.state.color == yellow ? green : yellow;
    this.setState({ color: newColor });
  }
    
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  Change color
</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle/>, document.getElementById('app'));

