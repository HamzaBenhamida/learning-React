import React from 'react';
import ReactDOM from 'react-dom';

/*
Stateless Functional Components
*/
export const Friend = () => {
	return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
    };
    
ReactDOM.render(
	    <Friend />,
	    document.getElementById('app')
);

/*
Function Components and Props
*/
export const NewFriend = (props) => {
	return (
<div>
<img src={props.src} />
</div>
);
}

ReactDOM.render(
<NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
document.getElementById('app')
);