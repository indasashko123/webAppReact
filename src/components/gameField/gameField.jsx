import React from "react";
const tg = window.Telegram.WebApp;


export const GameField = () => {
    
    console.log(tg.user);
    
    return  (
       <div className="GameFiled-Container">
            <img alt="user foto"></img>
       </div>
    )
}