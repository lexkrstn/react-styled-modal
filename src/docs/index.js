import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../lib';

const App = () => (
  <div>
    <h1>My UI</h1>
    <h2>Button</h2>
    <p>Here's an example of button.</p>
    <Modal />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
