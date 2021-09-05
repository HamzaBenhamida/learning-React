import React from 'react';
import ReactDOM from 'react-dom';

/*
Introduction to Lifecycle Methods
*/
class Clock extends React.Component {
	constructor(props){
	  super(props);
	  this.state = { date: new Date() };
	}
	render() {
	  return <div>{this.state.date.toLocaleTimeString()}</div>;
	}
      }
      
ReactDOM.render(<Clock />, document.getElementById('app'));

/*
componentDidMount
*/
class Clock extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { date: new Date() };
	}
	render() {
	  return <div>{this.state.date.toLocaleTimeString()}</div>;
	}
	componentDidMount() {
	  const oneSecond = 1000;
      setInterval(() => {
	this.setState({ date: new Date() });
      }, oneSecond);
	}
      }
      
ReactDOM.render(<Clock />, document.getElementById('app'));

/*
componentWillUnmount
*/
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

/*
componentDidUpdate
*/

export class Clock extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { date: new Date() };
	}
	render() {
	  return (
	    <div>
	      {this.props.isPrecise
		? this.state.date.toISOString()
		: this.state.date.toLocaleTimeString()}
	    </div>
	  );
	}
	componentDidMount() {
	  this.startInterval();
	}
	componentWillUnmount() {
	  clearInterval(this.intervalID);
	}
	componentDidUpdate(prevProps) {
	  if(this.props.isPrecise === !prevProps.isPrecise) {
	    clearInterval(this.intervalID);
	    this.startInterval(); 
	    }
	  }
	  startInterval() {
	    const delay = (this.props.isPrecise) ? 100 : 1000;
	    this.intervalID = setInterval(() => {
	    this.setState({ date: new Date() });
	  }, delay);
	 
      
	}
      }