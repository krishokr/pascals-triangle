import './App.css';
import {useState} from 'react';
import MainView from './MainView';
import Welcome from './Welcome';

//Pascal's pastel triangle

function App() {
  const [welcome, setwelcome] = useState(true);

  function changeView() {
    setwelcome(false);
  }

  return (
    <div className="App">
      {
        (welcome) ? <Welcome changeView={() => changeView()}/> : <MainView />
      }
    </div>
  );
}

export default App;
