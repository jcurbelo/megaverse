import { BaseMapElement } from '../../src/elements/baseElement';
import { MapCoordinate, MapElementRequest } from '../../src/types/api';

export class CustomElement extends BaseMapElement {
  public readonly endpoint = 'custom' as const;

  getRequest(): MapElementRequest {
    return {
      element: this.coordinate,
      apiEndpoint: this.endpoint,
    };
  }

  check(): boolean {
    // can only be placed on even-numbered rows
    return this.coordinate.row % 2 === 0;
  }

  constructor(coordinate: MapCoordinate, elementType: string) {
    super(coordinate, elementType);
  }
}
