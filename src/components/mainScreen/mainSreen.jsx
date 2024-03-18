import React from "react";
import { Footer } from "../footer/footer";
import { GuildData } from "../guildData/GuildData";
import { GameField } from "../gameField/gameField";

export const MainSreen = (props) => {

    return (
        <div>
            <GuildData></GuildData>
            <GameField props={props.user}></GameField>
            <Footer></Footer>
        </div>
    )
}