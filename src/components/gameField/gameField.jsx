import React, { useEffect, useState } from "react";

const startUser =  {
  id : "", 
  first_name : "", 
  username : "", 
  last_name : "", 
  language_code : ""
}

export const GameField = (props) => {
 
 
 
  const [tg, setTg] = useState(window.Telegram.WebApp);
  const [user, setUser] = useState(startUser);
  useEffect( ()=> {
      tg.ready();
      console.log(tg.initDataUnsafe);
      setUser(tg.initDataUnsafe.user);
    }, 
      []);

  return  (
      <div className="GameFiled-Container">
        <div>
          <p> ID is {user.id}</p>
          <p> Name id {user.first_name + " " + user.username + " " + user.last_name} </p>
          <p> Language is {user.language_code}</p>
        </div>
        <img alt="no foto" ></img>
      </div>
   )
}