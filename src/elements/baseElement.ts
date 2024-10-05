import { IMapElement } from '../interfaces/IMapElement';
import { MapCoordinate, MapElementRequest } from '../types/api';
import { MapElementType } from '../factories/mapElementFactory';
import { Map } from '../elements/map';

export abstract class BaseMapElement implements IMapElement {
  constructor(
    public coordinate: MapCoordinate,
    public elementType: MapElementType
  ) {}

  abstract endpoint?: string;
  abstract getRequest(): MapElementRequest;
  abstract check(map: Map): boolean;
}
