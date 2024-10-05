import { IMapElement } from '../interfaces/IMapElement';
import { MapCoordinate, MapElementRequest } from '../types/api';
import { MapElementType } from '../factories/mapElementFactory';

export abstract class BaseMapElement implements IMapElement {
  constructor(
    public coordinate: MapCoordinate,
    public elementType: MapElementType
  ) {}

  abstract endpoint?: string;
  abstract getRequest(): MapElementRequest;
}
