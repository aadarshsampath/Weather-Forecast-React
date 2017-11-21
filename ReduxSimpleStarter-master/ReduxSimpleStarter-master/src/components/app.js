import React, {Component} from 'react';
import SearchBar from '../container/search_bar'
import WeatherList from '../container/weather-list'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}
