import { useEffect, useState } from 'react';
import './App.css';
import { MainSreen } from './components/mainScreen/mainSreen';

const tg = window.Telegram.WebApp;

function App() {


  const [tg, setTg] = useState(window.Telegram.WebApp);
  
  const objString = JSON.stringify(tg);
  console.log(objString);

  //tg.showAlert(`Добро пожаловать, @${tg.WebAppUser.username}.`);
  useEffect( ()=> {
    tg.ready();
    setinitData(tg.initData ? toString(tg.initData) : "nope");
    setinitDataUnsafe(tg.initDataUnsafe ? toString(tg.initDataUnsafe) : "nope");
    setthemeParams(tg.themeParams ? toString(tg.themeParams) : "nope");  
  }, 
    []);

  const onClose = () => {
    tg.close();
  }
  const [initData, setinitData] = useState(tg.initData ? toString(tg.initData) : "nope");
  const [initDataUnsafe, setinitDataUnsafe] = useState(tg.initDataUnsafe ? toString(tg.initDataUnsafe) : "nope");
  const [themeParams, setthemeParams] = useState(tg.themeParams ? toString(tg.themeParams) : "nope");

  return (
    <div className="App">
      <MainSreen props={tg}></MainSreen>
      <button onClick={onClose}>Close</button>
      <p> {objString}</p>
      <p> {initData}</p>
      <p> {initDataUnsafe}</p>
      <p> {themeParams}</p>
      <p> { tg.version} </p>
      <p> {tg.viewportHeight} </p>
      <p> {tg.viewportStableHeight} </p>
    </div>
  );
}
export default App;