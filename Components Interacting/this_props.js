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
      
/*
Render Different UI Based on props
You can do more with props than just display them. You can also use props to make decisions.
*/

//In App.js
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
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
		if (this.props.signedIn === false) {
		  return <h1>GO AWAY</h1>;
		} else {
		  return <h1>Hi there, {this.props.name}!</h1>;
		}
	}
}

//In Home.js
import { Welcome } from './Welcome';

class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);

//In Welcome.js
export class Welcome extends React.Component {
	render() {
	  if (this.props.name === 'Wolfgang Amadeus Mozart') {
	    return (
		    <h2>
		      hello sir it is truly great to meet you here on the web
		    </h2>
	    );
	  } else {
	    return (
		    <h2>
		      WELCOME "2" MY WEB SITE BABYYY!!!!!
		    </h2>
	    );
	  }
	}
}

/*
Put an Event Handler in a Component Class
define an event handler as a method on the component class, just like the render method.
*/

//In Talker.js 
import { Button } from './Button';

class Talker extends React.Component {
talk () {
	let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}
render() {
    return <Button />;
  }
}

//In Button.js
export class Button extends React.Component {
	render() {
	  return (
	    <button>
	      Click me!
	    </button>
	  );
	}
}

/*
Pass an Event Handler as a prop
*/


//In Talker.js 
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//Using the last Button.js

/*
Receive an Event Handler as a prop
*/
export class Button extends React.Component {
	render() {
	  return (
	    <button onClick={this.props.talk}>
	      Click me!
	    </button>
	  );
	}
}

//Using last Talker.js

/*
handleEvent, onEvent, and this.props.onEvent
When you pass an event handler as a prop, as you just did, there are two names that you have to choose.
first, think about what type of event you are listening for.If you are listening for a “click” event, then you name your event handler handleClick (handle is the key word)
Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name your prop onClick.
*/

//Talker.js
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//Button.js
export class Button extends React.Component {
	render() {
	  return (
	    <button onClick={this.props.onClick}>
	      Click me!
	    </button>
	  );
	}
}

/*
this.props.children
Every component’s props object has a property named children.
this.props.children will return everything in between a component’s opening and closing JSX tags.
If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.
*/

//Lists.js
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

/*
defaultProps
If nobody passes any text to Button, then Button‘s display will be blank. It would be better if Button could display a default message instead.
You can make this happen by giving your component class a property named defaultProps.
The defaultProps property should be equal to an object:Inside of this object, write properties for any default props that you’d like to set.
*/
class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {
  text: 'I am a button'
}

ReactDOM.render(
  <Button text=""/>, 
  document.getElementById('app')
);