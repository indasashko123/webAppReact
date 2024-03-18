import React, { useState } from "react";

export const GameField = (props) => {


  return  (
      <div className="GameFiled-Container">
        <div>
          <p> ID is {props.id}</p>
          <p> Name id {props.first_name + " " + props.username + " " + props.last_name} </p>
          <p> Language is {props.language_code}</p>
        </div>
        <img alt="no foto" src={props.photo}></img>
      </div>
   )
}