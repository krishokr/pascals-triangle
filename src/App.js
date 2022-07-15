import './App.css';
import {useEffect, useState} from 'react';
import Row from './Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap';
import PascalTriangle from './PascalTriangle';
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
