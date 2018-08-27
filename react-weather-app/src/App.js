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
  //Initializing a state - object w key value pairs that tracks changes in a component
  // DO NOT EVER DIRECTLY MANIPULATE THE STATE
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }
  // Create your own method - Get Weather
  // arrow functions allow you to use 'this' key word independently (its bound to this component)
  // e is an event object
  getWeather = async (e) => {
    //prevents full page refresh on click of submit button
    e.preventDefault();
    //targeting the specific inputs of city and country being put in - so its not always 'Manchester'
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // fetch keyword + URL you want to make API call to
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}a&units=metric`);
    //need to convert response to JSON format
    const data = await api_call.json();
    console.log(data);
    // setState changes the data in the state
    this.setState({
      // values found in console log 
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    });
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
