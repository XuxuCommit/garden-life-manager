export interface Garden {
  id: string;
  name: string;
  width: number;
  height: number;
  unit: "cm" | "m";
  beds: string[];
}