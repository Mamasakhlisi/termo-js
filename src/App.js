import React, {useState} from 'react';
import Item from './components/Items/Item'
function App() {
  const [state, setState] = useState({
    AceValue: '',
  })

  const AceHandler = (newValue) => {
    console.log("change", newValue);
  }
  return (
    <div className="App">
      <Item AceHandler={AceHandler}/>
    </div>
  );
}

export default App;
