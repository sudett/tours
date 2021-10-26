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
    this.setState({ isLoading: true });
    const response = await fetch(url);
    const tours = await response.json();
    this.setState({ tours, isLoading: false }, () =>
      console.log(this.state.tours)
    );
  };

  componentDidMount() {
    this.fetchTours();
  }

  deleteTour = (id) => {
    const tours = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({ tours });
  };

  handleRefresh = () => {
    this.fetchTours();
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h1 className="loading">Loading ...</h1>
        ) : (
          <Tours
            tours={this.state.tours}
            deleteTour={this.deleteTour}
            handleRefresh={this.handleRefresh}
          />
        )}
      </div>
    );
  }
}
