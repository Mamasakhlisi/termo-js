import React from 'react';
import Item from './components/Items/Item'
import { Ripple } from 'react-preloaders';
function App() {
  return (
    <div className="App">
      <Item />
      <Ripple color={'#4e4e4e'} />
    </div>
  );
}

export default App;
