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
const API_key = "dac4d5073f08d31682d6c106b0690a16";


class App extends Component {
  // Create your own method - Get Weather
  // arrow functions allow you to use 'this' key word independently (its bound to this component)
  // e is an event object
  getWeather = async (e) => {
    //prevents full page refresh on click of submit button
    e.preventDefault();
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
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
