export interface Grid {

  enabled: boolean;

  spacing: number;

  snap: boolean;

}

export const defaultGrid: Grid = {

  enabled: true,

  spacing: 50,

  snap: true

};