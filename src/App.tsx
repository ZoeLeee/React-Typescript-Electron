import React from 'react';
import { render } from 'react-dom';

(window as any).global = window;

const App = () => {
  return (
    <div>
      <h1>123</h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));
