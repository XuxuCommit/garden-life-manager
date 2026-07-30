import { Camera } from "./Camera";
import { Grid } from "./Grid";
import { Viewport } from "./Viewport";

export interface CanvasState {

  camera: Camera;

  grid: Grid;

  viewport: Viewport;

}