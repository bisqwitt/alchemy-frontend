import {PlanetData} from "./planetData.ts";

export interface CardData {
    name: string;
    planetType: PlanetData;

    maxHp: number;
    currentHp: number;
    attackDmg: number;
}