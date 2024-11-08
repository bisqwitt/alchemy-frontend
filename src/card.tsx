import {CardData} from "./cardData.ts";
import React from "react";

const Card: React.FC<CardData> = (props) => {
    return (
        <div className="card">
            <header>
                <div className="cardSymbol">
                    {props.planetType.symbol}
                </div>
                <div className="cardName">
                    {props.name}
                </div>
                <div className="cardHealth">
                    {props.currentHp}/{props.maxHp}
                </div>
            </header>
            <div className="cardbody">
            </div>
            <footer>

            </footer>
        </div>

    )
}

export default Card;