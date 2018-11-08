import React, { Component } from 'react';


class Titles extends Component {
    // Render - built in method that returns JSX - JS running in background transpiled by Babel
    render() {
      return (
       <div>
           <h1 className="title-container__title">Weather Finder</h1>
            <p className="title-container__subtitle">Find out temperature, conditions and more</p>
        </div>
      );
    }
  }
  
  export default Titles;
  