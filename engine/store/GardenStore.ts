import { Bed } from "../garden/BedEngine";

export interface GardenStore {

    beds: Bed[];

    selectedBedId?: string;

}