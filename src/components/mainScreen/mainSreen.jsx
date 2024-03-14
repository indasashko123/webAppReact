import React from "react";
import { Footer } from "../footer/footer";
import { GuildData } from "../guildData/GuildData";
import { GameField } from "../gameField/gameField";

export const MainSreen = () => {



    return (
        <div>
            <GuildData></GuildData>
            <GameField></GameField>
            <Footer></Footer>
        </div>
    )
}