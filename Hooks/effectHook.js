/*
When to use Effect Hook:
When the component is first added, or mounted, to the DOM and renders
When the state or props change, causing the component to re-render
When the component is removed, or unmounted, from the DOM.
*/

/*
Function Component Effects
*/
export default function Counter() {
	const [count, setCount] = useState(0);
	useEffect(() => {
	window.alert(`Count: ${count}`);
	});
	const handleClick = () => {
	  setCount((prevCount) =>  prevCount + 1);
	};
      
	return (
	  <div>
	    <p>You clicked {count} times</p>
	    <button onClick={handleClick}>
	      Click me
	    </button>
	  </div>
	);
      }

/*
Clean Up Effects
*/
export default function Counter() {
	const [clickCount, setClickCount] = useState(0);
      
	const increment = () => setClickCount((prev) => prev + 1);
      
	useEffect(() => {
	  document.addEventListener('mousedown', increment);
	  return () => {
	    document.removeEventListener('mousedown', increment);
	  };
	});
      
	return (
	    <h1>Document Clicks: {clickCount}</h1>
	);
      }

/*
Control When Effects Are Called
*/
import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
    </>
  );
}

/*
Fetch Data
*/



