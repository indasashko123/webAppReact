import React from "react";



export const GuildData = () => {



    return (
        <div className="GuildData-Container">
            <div className="GuildData-Icon-Container">
                <img alt="GuildData-Icon"></img>
            </div>
            <div className="GuildData-Info-Container">
                <div className="GuildData-Name">Guild Name</div>
                <div className="GuildData-Member-Count-Label">Количество участников</div>
                <div className="GuildData-Member-Count"> 100/100</div>
            </div>
            <div className="GuildData-RankIcon-Container">
                <img alt="GuildData-RankIcon"></img>
            </div>
        </div>
    )
}