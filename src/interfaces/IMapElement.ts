import { MapCoordinate, MapElementRequest } from '../types/api';

export interface IMapElement {
  coordinate: MapCoordinate;
  elementType: string;
  endpoint?: string;
  getRequest(): MapElementRequest;
}
