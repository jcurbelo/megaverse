import { IMapElement } from '../interfaces/IMapElement';
import { MapCoordinate, MapElementRequest } from '../types/api';
import { Map } from '../elements/map';

export abstract class BaseMapElement implements IMapElement {
  constructor(
    public coordinate: MapCoordinate,
    public elementType: string
  ) {}

  abstract getRequest(): MapElementRequest;
  abstract check(map: Map): boolean;
}
