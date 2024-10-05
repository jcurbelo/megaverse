import { MapCoordinate, MapElementRequest } from '../types/api';
import { MapElementType } from '../factories/mapElementFactory';
import { BaseMapElement } from './baseElement';

export type ComethDirection = 'up' | 'down' | 'right' | 'left';

export class Cometh extends BaseMapElement {
  public readonly endpoint = 'comeths' as const;
  public direction: ComethDirection;

  public getRequest(): MapElementRequest {
    return {
      element: { ...this.coordinate, direction: this.direction },
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
    switch (elementType) {
      case 'RIGHT_COMETH':
      case 'LEFT_COMETH':
      case 'UP_COMETH':
      case 'DOWN_COMETH':
        this.direction = elementType
          .split('_')[0]
          .toLowerCase() as ComethDirection;
        break;
      default:
        throw new Error(`Unknown element type: ${elementType}`);
    }
  }
}
