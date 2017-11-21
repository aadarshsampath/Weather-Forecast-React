import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWeather} from "../actions/index";

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {term: ''};
  }

  render() {
    return (
      <form onSubmit={ (event) =>{
        event.preventDefault();
        // go fetch weather data
        this.props.fetchWeather(this.state.term);
        console.log(this.props);
        this.setState({term: ''})

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

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);