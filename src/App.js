import { useEffect } from 'react';
import './App.css';
import { MainSreen } from './components/mainScreen/mainSreen';

const tg = window.Telegram.WebApp;

function App() {

  useEffect( ()=> {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <MainSreen props={tg}></MainSreen>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
