import React from 'react';
import ReactDOM from 'react-dom';

/*
Use Multiline JSX in a Component
..
*/
class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          So let not this present life deceive you
        </p>
        <cite>
          <a target="_blank"
            href="https://i.pinimg.com/originals/2f/aa/b9/2faab960399077c7c456b3d01ed6c1fd.png">
            Quran
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

/*
Use a Variable Attribute in a Component
..
*/
const owl = {
	title: 'Excellent Owl',
	src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
      };
      
class Owl extends React.Component {
	render(){
	  return (
	    <div>
	    <h1>
	    ${owl.title}
	    </h1>
	    <img
	    src={owl.src}
	    alt={owl.title}
	    />
	    </div>
	  );
	}
}
      
ReactDOM.render(<Owl/>, document.getElementById('app'));
      
/*
Put Logic in a Render Function
...
*/

const friends = [
	{
	  title: "Yummmmmmm",
	  src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
	},
	{
	  title: "Hey Guys!  Wait Up!",
	  src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
	},
	{
	  title: "Yikes",
	  src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
	}
      ];
      
      
class Friend extends React.Component {
	render(){
	  let friend = friends[0];
      
	  return (
	    <div>
	    <h1>{friend.title}</h1>
	    <img
	    src={friend.src}
	    />
	    </div>
	  );
	}
}
      
ReactDOM.render(<Friend/>, document.getElementById('app'));
      
/*
Use a Conditional in a Render Function
...
*/
const fiftyFifty = Math.random() < 0.5;


class TonightsPlan extends React.Component {
  render(){
    let h1;
    if(fiftyFifty === true){
        h1 = 'Tonight I\'m going out WOOO';
    }
    else{
        h1 = 'Tonight I\'m going to bed WOOO';
    }
    return <h1>{h1}</h1>;
  }
}

ReactDOM.render(<TonightsPlan/>, document.getElementById('app'));

/*
Use this in a Component
...
*/
class MyName extends React.Component {
	
	get name() {
	  return 'Hamza';
	}
	
	render() {
	    return <h1>My name is {this.name}.</h1>;
	  }
	}
	
ReactDOM.render(<MyName />, document.getElementById('app'));

/*
Use an Event Listener in a Component
..
*/
class Button extends React.Component {
	scream() {
	  alert('AAAAAAAAHHH!!!!!');
	}
      
	render() {
	  return <button onClick={this.scream}>AAAAAH!</button>;
	}
      }
      
ReactDOM.render(<Button/>, document.getElementById('app'));