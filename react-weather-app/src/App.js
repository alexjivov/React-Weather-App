import React, { Component } from 'react';

// import minified CSS
import './Assets/css/default.min.css';

//////////////////
////COMPONENTS////
/////////////////
import Titles from './Components/titles';
import Form from './Components/form';
import Weather from './Components/weather';

// WEATHER API KEY //
const API_key = "7d9bb4a9ebb655c852f28bb7d3c4081a";


class App extends Component {
  // Create your own method - Get Weather
  // arrow functions allow you to use 'this' key word independently (its bound to this component)
  getWeather = async () => {
    // fetch keyword + URL you want to make API call to
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_key}a&units=metric`);
    //need to convert response to JSON format
    const data = await api_call.json();
    console.log(data);
    }
  // Render - built in method that returns JSX - JS running in background transpiled by Babel
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
