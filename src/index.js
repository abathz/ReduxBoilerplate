import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
   return(
      <div className="text-center">
         <h1>React, Redux and Webpack Boilerplate</h1>
      </div>
   );
}

ReactDOM.render(<App />, document.querySelector('.container'));
