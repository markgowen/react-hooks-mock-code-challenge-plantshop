import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ 
  plants,
  query,
  setQuery,
  onAddPlant
  }) {

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search query={query} setQuery={setQuery} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
