import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWeather} from "../actions/index";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {term: ''};
  }

  render() {
    return (
      <form onSubmit={ (event) =>{
        event.preventDefault();
        // go fetch weather data
      }} className="input-group">
        <input
          placeholder="Get 5 day forecast"
          className="form-control"
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}