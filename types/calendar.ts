export interface GardenEvent {

  id: string;

  title: string;

  date: string;

  type:
    | "Aussaat"
    | "Pflanzen"
    | "Ernte"
    | "Pflege";

}