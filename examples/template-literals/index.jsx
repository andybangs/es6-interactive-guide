import React from 'react/addons';
import Playground from 'component-playground';
import Code from '../../code.jsx';
import a from 'raw!./a.example';

export default React.createClass({
  render() {
    return (
      <div>
        <p>
          Template literals improve the experience of constructing strings by allowing embedded expressions.
        </p>
        <p>
          The output of <Code>{'`My name is ${name}`'}</Code> is equivalent to <Code>{'"My name is " + name'}</Code>
        </p>
        <Playground codeText={a} es6Console={true} scope={{}} />
      </div>
    );
  }
});
