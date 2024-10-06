import { MapElementType } from '../factories/mapElementFactory';

export type MapGoalResponse = {
  goal: MapElementType[][];
};

export type MapCoordinate = {
  row: number;
  column: number;
};

export type MapElementRequest = {
  element: MapCoordinate & Record<string, string | number>;
  apiEndpoint: string;
};
