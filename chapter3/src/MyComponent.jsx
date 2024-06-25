/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/* 3.3.2

// rcs
// import React from 'react';
const MyComponent = () => {
  return w component</di = props =>>;
};

export default MyComponent;
 */

// const MyComponent = props => {
//   return <div>my name is {props.name}</div>;
// };

// export default MyComponent;

/* const MyComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div>my name is {props.name}</div>;
};

MyComponent.defaultProps = {
  name: 'basic',
};

export default MyComponent; */
/* 
const MyComponent = (props) => {
  return (
    <div>
      my name is {props.name} <br />
      children is {props.children} <br />
      thx.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'basic',
};

export default MyComponent; */

/* const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      hi my name is {props.name} <br />
      childeren is {props.children} <br />
      thx.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'basic',
};

export default MyComponent; */

/* const MyComponent = ({ name, children }) => {
  return (
    <div>
      hi my name is {name} <br />
      childeren is {children} <br />
      thx.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'basic',
};

export default MyComponent; */

/* import PropTypes from 'prop-types';

const MyComponent = ({ name, favNumber, children }) => {
  return (
    <div>
      hi my name is {name} <br />
      childeren is {children} <br />
      thx. <br />
      my favnum is {favNumber}
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favNumber: PropTypes.number.isRequired,
};

export default MyComponent;
 */

/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favNumber, children } = this.props;
    return (
      <div>
        hi im {name} <br />
        children is {children} <br />
        favnum {favNumber}
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favNumber: PropTypes.number.isRequired,
};

export default MyComponent;
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    nane: 'basic',
  };
  static propTypes = {
    name: PropTypes.string,
    favNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favNumber, children } = this.props;
    return (
      <div>
        hi im {name} <br />
        children is {children} <br />
        favnum {favNumber}
      </div>
    );
  }
}

export default MyComponent;
