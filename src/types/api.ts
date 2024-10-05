import { MapElementType } from '../factories/mapElementFactory';
import { Map } from '../elements/map';

export type MapResponse = {
  map: {
    content: Map;
  };
};

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
