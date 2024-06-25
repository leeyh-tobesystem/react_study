/* 
3.1
import "./App.css";

function App() {
  const name = "react";
  return <div className="react">{name}</div>;
}

export default App;
 

import { Component } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className='react'>{name}</div>;
  }
}

export default App;
*/

/* import MyComponent from './MyComponent';

const App = () => {
  // return <MyComponent name="react" />;
  return <MyComponent />;
};

export default App; */

/* import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent>React-vite</MyComponent>;
};

export default App;
 */

/* import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent name="react" favNumber={3}>
      React-vite
    </MyComponent>
  );
};

export default App; */

/* import Counter from './Counter';

const App = () => {
  return <Counter></Counter>;
};

export default App; */

import Say from './Say';

const App = () => {
  return <Say />;
};

export default App;
