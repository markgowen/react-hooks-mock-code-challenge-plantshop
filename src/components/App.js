import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plants => setPlants(plants))
  }, [])

  // handlers 
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const filteredResults = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div className="app">
      <Header />
      <PlantPage 
        plants={filteredResults}
        query={query} 
        setQuery={setQuery} 
        onAddPlant={handleAddPlant}
      />
    </div>
  );
}

export default App;
