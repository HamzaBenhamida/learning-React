import React from 'react';
import ReactDOM from 'react-dom';

/*
A Component in a Render Function
You’ve seen render methods return <div></div>s, <p></p>s, and <h1></h1>s.
Render methods can also return another kind of JSX: component instances.
*/
class OMG extends React.Component {
	render() {
	  return <h1>Whooaa!</h1>;
	}
      }
       
class Crazy extends React.Component {
	render() {
	  return <OMG />;
	}
}

/*
Apply a Component in a Render Function
When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.
*/
//NavBar and ProfilePage are located in two separate files
class NavBar extends React.Component {
	render() {
	  const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
	  const navLinks = pages.map(page => {
	    return (
	      <a href={'/' + page}>
		{page}
	      </a>
	    )
	  });
      
	  return <nav>{navLinks}</nav>;
	}
}

class ProfilePage extends React.Component {
	render() {
	  return (
	    <div>
	      <NavBar/>   // Just like that
	      <h1>All About Me!</h1>
	      <p>I like movies and blah blah blah blah blah</p>
	      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
	    </div>
	  );
	}
}

/*
Require A File
Every JavaScript file in your application is invisible to every other JavaScript file by default. ProfilePage.js and NavBar.js can’t see each other.
If you use an import statement, and the string at the end begins with either a dot or a slash, then import will treat that string as a filepath. import will follow that filepath, and import the file that it finds.
If your filepath doesn’t have a file extension, then “.js” is assumed.
*/
import { NavBar } from './NavBar';

/*
export
When you import a variable from a file that is not the current file, then an import statement isn’t quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.
Few different ways to use export. Right now, we will be using a style called “named exports.”
*/

export class NavBar extends React.Component {
	render() {
	  const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
	  const navLinks = pages.map(page => {
	    return (
	      <a href={'/' + page}>
		{page}
	      </a>
	    )
	  });
      
	  return <nav>{navLinks}</nav>;
	}
}

/*
Component Rendering In Action 
*/

//In NavBar.js
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

//In ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage/>, document.getElementById('app'));