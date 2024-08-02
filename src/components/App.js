import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [dark, setDark] = useState(false);
  const appClass = dark ? "App dark" : "App light"
  const theme = dark ? "Light Mode": "Dark Mode" 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> setDark(!dark)}>{theme}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
