import React, { useEffect } from "react";
import "./App.css";

import Car from "./components/Car";

const App: React.FC = () => {
  useEffect(() => {
    const myCar = new Car("Toyota", "Corolla", 2021);

    myCar.start();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Open the console to see the car engine start message.</p>
      </header>
    </div>
  );
};

export default App;
