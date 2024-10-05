import { MapCoordinate, MapElementRequest } from '../types/api';
import { MapElementType } from '../factories/mapElementFactory';
import { BaseMapElement } from './baseElement';

export class Polyanet extends BaseMapElement {
  public readonly endpoint = 'polyanets' as const;
  public getRequest(): MapElementRequest {
    return {
      element: this.coordinate,
      apiEndpoint: this.endpoint,
    };
  }
  public check(): boolean {
    return true;
  }
  constructor(
    public coordinate: MapCoordinate,
    public elementType: MapElementType
  ) {
    super(coordinate, elementType);
  }
}
