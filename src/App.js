import { useEffect, useState } from 'react';
import './App.css';
import { MainSreen } from './components/mainScreen/mainSreen';

const tg = window.Telegram.WebApp;

function App() {


  const [tg, setTg] = useState(window.Telegram.WebApp);
  const [objString, setobjString] = useState(JSON.stringify(tg));
  const [ready, setReady] = useState(false);
  const [initData, setinitData] = useState(tg.initData ? toString(tg.initData) : "nope");
  const [initDataUnsafe, setinitDataUnsafe] = useState(tg.initDataUnsafe ? toString(tg.initDataUnsafe) : "nope");
  const [themeParams, setthemeParams] = useState(tg.themeParams ? toString(tg.themeParams) : "nope");
  const [user, setUser] = useState();
  const [photo, setPhoto] = useState();
/*
  i = {
    query_id : "AAGB368eAAAAAIHfrx7k_J5o",
    user : {
      id : 514842497,
      first_name :"Некий",
      last_name :"Человек",
      username : "AlexKrahm",
      language_code : "ru",
      allows_write_to_pm :true
    },
    auth_date : 1710725231,
    hash : "5a02d84576d6f82336c715e3dda819a7d52cee52fdae6b4afa0ea5f4a524bcf6"
  };
*/
  useEffect( ()=> {
    tg.ready();
    setinitData(tg.initData ? toString(tg.initData) : "nope");
    setinitDataUnsafe(tg.initDataUnsafe ? toString(tg.initDataUnsafe) : "nope");
    setthemeParams(tg.themeParams ? toString(tg.themeParams) : "nope");
    setobjString(JSON.stringify(tg,null, 2));
    setReady(true);
    console.log(tg);
    let photo;
    try {
      tg.getUserProfilePhotos({ limit: 1 })
      .then((response) => {
          const photos = response.photos;
          if (photos.length > 0) {
              photo = photos[0][0]; 
              console.log(photo);
          } else {
              console.log('Пользователь не загрузил фотографий.');
          }
      })
      .catch((error) => {
          console.error('Ошибка при получении фото пользователя:', error);
      });
      setPhoto(photo);
    } catch {
      console.log("cathc0");
    }
    setUser({...tg.initDataUnsafe, photo });
    
  }, 
    []);

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <MainSreen props={user}></MainSreen>
      <button onClick={onClose}>Close</button>
      <p> { "Ready - " + ready}</p>
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