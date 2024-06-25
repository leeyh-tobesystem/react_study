// import { Fragment } from 'react';
import './App.css';

function App() {
  /* 2.4.1
  return (
  <div>
    <h1>hi react!</h1>
    <h2>Work It!</h2>
  </div>

  <Fragment>
    <h1>hi react!</h1>
    <h2>Work It!</h2>
  </Fragment>

  <>
    <h1>hi react!</h1>
    <h2>Work It!</h2>
  </>
  ); */

  /* 2.4.2
  const name = 'react';
  const name = 'leact';
  const name = undefined;

  return (
  <div>
    <>
      <h1>hi {name}!</h1>
      <h2>Work It!</h2>
    </>
  </div> */

  /* 2.4.3
  <div>
    {name === 'react' ? (
      <h1>it&apos;s react</h1>
    ) : (
      <h1>it&apos;s not react</h1>
    )}
  </div>

  <div>{name === 'react' ? <h1>it&apos;s react</h1> : null}</div>*/

  /* 2.4.4
  <div>{name === 'react' && <h1>it&apos;s react</h1>}</div>
  ); */

  /* 2.4.5
  return name || 'value is undefined';
  return <div>{name || 'react'}</div>; */

  /* 2.4.6
  const name = 'react';
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,
      }}
    >
      {name}
    </div>
  ); */

  /* 2.4.7
  const name = 'react';
  return (
    <>
      <div className="react">
        {name}
      </div>
    </>
  ); */

  /* 2.4.8
  const name = 'react';
  return (
    <>
      <div className="react">{name}</div>
      <input></input>
      <input />
    </>
  ); */

  //  2.4.9
  // const name = 'react';
  // return (
  //   <>
  {
    /* this is comment */
  }
  //     <div className="react">{name}</div>
  //     // this is not comment
  //     /* error comment */
  //     <input />
  //   </>
  // );
  return null;
}
export default App;
