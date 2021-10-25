import React from "react";

import Tours from "./components/tours/tours.component";

import "./App.css";

const url = "https://course-api.com/react-tours-project";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tours: [],
      isLoading: true,
    };
  }

  fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    this.setState({ tours, isLoading: false }, () =>
      console.log(this.state.tours)
    );
  };

  componentDidMount() {
    this.fetchTours();
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h1 className="loading">Loading ...</h1>
        ) : (
          <Tours tours={this.state.tours} />
        )}
      </div>
    );
  }
}
