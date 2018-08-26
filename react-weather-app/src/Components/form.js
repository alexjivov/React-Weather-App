import React, { Component } from 'react';


class Form extends Component {
    // Render - built in method that returns JSX - JS running in background transpiled by Babel
    render() {
      return (
        <form>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country"/>
            <button>Get Weather</button>
            
        </form>
      );
    }
  }
  
  export default Form;
  