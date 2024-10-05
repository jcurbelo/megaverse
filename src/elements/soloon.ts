import { MapElementType } from '../factories/mapElementFactory';
import { MapCoordinate, MapElementRequest } from '../types/api';
import { BaseMapElement } from './baseElement';

export type SoloonColor = 'blue' | 'red' | 'purple' | 'white';

export class Soloon extends BaseMapElement {
  public readonly endpoint = 'soloons' as const;
  public color: SoloonColor;

  public getRequest(): MapElementRequest {
    return {
      element: { ...this.coordinate, color: this.color },
      apiEndpoint: this.endpoint,
    };
  }

  constructor(
    public coordinate: MapCoordinate,
    public elementType: MapElementType
  ) {
    super(coordinate, elementType);
    switch (elementType) {
      case 'WHITE_SOLOON':
      case 'BLUE_SOLOON':
      case 'RED_SOLOON':
      case 'PURPLE_SOLOON':
        this.color = elementType.split('_')[0].toLowerCase() as SoloonColor;
        break;
      default:
        throw new Error(`Unknown element type: ${elementType}`);
    }
  }
}
