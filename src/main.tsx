import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from "./card.tsx";
import {CardData} from "./cardData.ts";

const sampleData: CardData = {
    name: "Artemis",
    planetType: {
        symbol: "☽",
        powerType: {
            name: "fire",
            symbol: "f"
        },
        strongAgainst: [ "venus", "jupiter" ],
        weakAgainst: [ "sun", "mars" ]
    },
    maxHp: 50,
    currentHp: 30,
    attackDmg: 20
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Card
        name={sampleData.name}
        planetType={sampleData.planetType}
        maxHp={sampleData.maxHp}
        currentHp={sampleData.maxHp}
        attackDmg={sampleData.attackDmg}
    />
  </StrictMode>,
)
