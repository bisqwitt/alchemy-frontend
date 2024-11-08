import {PowerData} from "./powerData.ts";

export interface PlanetData {
    symbol: string;
    powerType: PowerData;
    strongAgainst: string[];
    weakAgainst: string[];
}