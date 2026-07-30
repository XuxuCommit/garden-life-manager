export interface Camera {

  zoom: number;

  offsetX: number;

  offsetY: number;

}

export const defaultCamera: Camera = {

  zoom: 1,

  offsetX: 0,

  offsetY: 0

};