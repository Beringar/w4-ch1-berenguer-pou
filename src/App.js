import { useState } from "react";
import dataGentlemen from "./data/dataGentlemen";
import "./App.scss";
import Info from "./components/Info/Info";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";

const App = () => {
  const [gentlemen, setGentlemen] = useState(dataGentlemen);

  const selectedGentlemen = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

  const selectAllGentlemen = () =>
    setGentlemen(
      gentlemen.map((gentleman) => ({ ...gentleman, selected: true }))
    );

  const toggleGentleman = (gentlemanId) => {
    const gentlemanToToggle = gentlemen.find(({ id }) => gentlemanId === id);
    gentlemanToToggle.selected = !gentlemanToToggle.selected;
    setGentlemen([...gentlemen]);
  };

  const removeGentleman = (gentlemanId) => {
    const gentlemanToRemoveId = gentlemen.findIndex(
      ({ id }) => gentlemanId === id
    );
    gentlemen.splice(gentlemanToRemoveId, 1);
    setGentlemen([...gentlemen]);
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info number={selectedGentlemen} classes="info" />
        <Button
          classes="button button--select"
          text="Select all"
          action={selectAllGentlemen}
        />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman, index) => (
            <Gentleman
              key={index}
              gentleman={gentleman}
              actionCard={() => toggleGentleman(gentleman.id)}
              actionIcon={() => removeGentleman(gentleman.id)}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
