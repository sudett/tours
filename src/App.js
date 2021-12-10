import React, { useState, useEffect } from "react";

import Tours from "./components/tours/tours.component";
import Loading from "./components/loading/loading.component";

import "./App.css";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);

      console.log(tours);
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
    }
  };

  useEffect(() => fetchTours(), []);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const handleRefresh = () => {
    fetchTours();
  };

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Tours
          tours={tours}
          deleteTour={deleteTour}
          handleRefresh={handleRefresh}
        />
      )}
    </div>
  );
};

export default App;
