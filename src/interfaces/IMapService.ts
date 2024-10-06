import { Map } from '../elements/map';
import { MapElementRequest } from '../types/api';

export interface IMapService {
  getMapElementRequests(map: Map): MapElementRequest[];
  buildMap(goal: string[][]): Map;
  validateMap(map: Map): boolean;
}
