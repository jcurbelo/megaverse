import { MapCoordinate, MapElementRequest } from '../types/api';
import { Map } from '../elements/map';

export interface IMapElement {
  coordinate: MapCoordinate;
  elementType: string;
  getRequest(): MapElementRequest | undefined;
  check(map: Map): boolean;
}
