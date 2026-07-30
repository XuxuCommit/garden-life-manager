export interface Plant {

  id: string;

  name: string;

  category:
    | "Gemüse"
    | "Blumen"
    | "Kräuter"
    | "Obst";

  emoji: string;

  sowMonth: number[];

  plantMonth: number[];

  harvestMonth: number[];

  companions: string[];

  enemies: string[];

}