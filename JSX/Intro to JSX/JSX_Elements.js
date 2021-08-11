/*
What is JSX ?
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
What does “syntax extension” mean?
In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!
If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
*/

const h1 = <h1>Hello world</h1>;

/*
JSX Elements
A basic unit of JSX is called a JSX element.
*/

<p>Hello World</p> // This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.

/*
JSX Elements And Their Surroundings
Javascript recognizes JSX elements as expressions, therefore they can be used wherever normal javascript expressrions are used.
Moreover these JSX elements can be passed down from functions and also stored in a variables and arrays and other things.
*/

const navBar = <nav>I am a nav bar</nav>; // Here’s an example of a JSX element being saved in a variable

//Here’s an example of several JSX elements being stored in an object:
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

//Another example of a JSX element being saved in a variable
const myArticle = <article></article>;