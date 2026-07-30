import { Point } from "./Point";

export interface Rectangle {
  id: string;

  x: number;
  y: number;

  width: number;
  height: number;

  rotation: number;
}

export function containsPoint(
  rect: Rectangle,
  point: Point
) {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
}