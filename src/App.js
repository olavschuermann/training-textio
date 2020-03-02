import React, { useState } from 'react';
import './App.css';

// Goal of app:
// Texteingabe-Feld
// Text wird per Alert ausgegeben
// Mindestlänge des Textes wird überprüft (1)
// Maximallänge des Textes wird überprüft (2)
// Bei Verstößen gegen Minimal- oder Maximallänge wird Absenden-Button deaktivier


function App() {
  return (
    <div className="App">
        <form>
            <label>Bitte geben Sie einen Text ein:</label>
            <br /><br />
            <input type="text"></input>
        </form>
    </div>
  );
}

export default App;