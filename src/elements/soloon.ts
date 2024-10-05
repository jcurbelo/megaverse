import { MapElementType } from '../factories/mapElementFactory';
import { MapCoordinate, MapElementRequest } from '../types/api';
import { Polyanet } from './polyanet';
import { BaseMapElement } from './baseElement';
import { Map } from './map';

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

  public check(map: Map): boolean {
    const { row, column } = this.coordinate;

    const adjacentPositions = [
      [row - 1, column],
      [row + 1, column],
      [row, column - 1],
      [row, column + 1],
    ];

    return adjacentPositions.some(
      ([r, c]) => map[r] && map[r][c] instanceof Polyanet
    );
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
