import React from 'react';
import './App.css';
import Child from './child.js'
import {TrnascationProvider} from './TranscationsContext.js';
function App() {
  return (
    <TrnascationProvider>
    <div>
      <Child/>
    </div>
    </TrnascationProvider>
  );
}

export default App;
