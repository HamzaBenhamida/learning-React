import React from 'react';
import ReactDOM from 'react-dom';

/*
Component's props
A component’s props is an object. It holds information about that component.
*/
class PropsDisplayer extends React.Component {
	render() {
		const stringProps = JSON.stringify(this.props);
      
	  return (
	    <div>
	      <h1>CHECK OUT MY PROPS OBJECT</h1>
	      <h2>{stringProps}</h2>
	    </div>
	  );
	}
      }
      
ReactDOM.render(<PropsDisplayer/>, document.getElementById('app'));

/*
Pass `props` to a Component
You can pass information to a React component by giving that component an attribute.
*/
class PropsDisplayer extends React.Component {
	render() {
		const stringProps = JSON.stringify(this.props);
      
	  return (
	    <div>
	      <h1>CHECK OUT MY PROPS OBJECT</h1>
	      <h2>{stringProps}</h2>
	    </div>
	  );
	}
      }
      
ReactDOM.render(<PropsDisplayer myProp='Hello'/>, document.getElementById('app'));

/*
Render a Component's props
1 - Find the component class that is going to receive that information.
2 - Include this.props.name-of-information in that component class’s render method’s return statement.
*/
class Greeting extends React.Component {
	render() {
	  return <h1>Hi there, {this.props.firstName}!</h1>;
	}
      }
      
ReactDOM.render(<Greeting firstName='Sarah' />, document.getElementById('app'));

/*
Pass props From Component To Component
Common use of props is to pass information to a component, from a different component. 
*/

//In App.js
import {Greeting} from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name='Curazon'/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

//In Greeting.js
export class Greeting extends React.Component {
	render() {
	  return <h1>Hi there, {this.props.name}!</h1>;
	}
}
      
      