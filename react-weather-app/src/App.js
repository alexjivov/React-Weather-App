import React, { Component } from 'react';

// import minified CSS
import './Assets/css/default.min.css';

//////////////////
////COMPONENTS////
/////////////////
import Titles from './Components/titles';
import Form from './Components/form';

class App extends Component {
  // Render - built in method that returns JSX - JS running in background transpiled by Babel
  render() {
    return (
      <div>
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;
