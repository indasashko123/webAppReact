import React, { useState } from "react";

export const GameField = (props) => {

  if (props.photo) {
    return  (
      <div className="GameFiled-Container">
           <img alt="user foto" src={props.photo}></img>
      </div>
   )
  } else {
    return  (
      <div className="GameFiled-Container">
           <img alt="no foto"></img>
      </div>
   )
  }
}