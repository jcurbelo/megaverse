import { MapCoordinate, MapElementRequest } from '../types/api';
import { Map } from '../elements/map';

export interface IMapElement {
  coordinate: MapCoordinate;
  elementType: string;
  endpoint?: string;
  getRequest(): MapElementRequest;
  check(map: Map): boolean;
}
