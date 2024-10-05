import { Cometh } from '../elements/cometh';
import { Polyanet } from '../elements/polyanet';
import { Soloon } from '../elements/soloon';
import { Space } from '../elements/space';
import { IMapElement } from '../interfaces/IMapElement';
import { IMapElementFactory } from '../interfaces/IMapElementFactory';
import { MapCoordinate } from '../types/api';

type ElementClass =
  | typeof Space
  | typeof Polyanet
  | typeof Soloon
  | typeof Cometh;

type ElementWithEndpoint = Extract<
  InstanceType<ElementClass>,
  { endpoint: string }
>;
export type MapElementEndpoints = ElementWithEndpoint['endpoint'] | undefined;

export const elementsCreatorFns = {
  SPACE: (coordinate: MapCoordinate) => new Space(coordinate, 'SPACE'),
  POLYANET: (coordinate: MapCoordinate) => new Polyanet(coordinate, 'POLYANET'),
  WHITE_SOLOON: (coordinate: MapCoordinate) =>
    new Soloon(coordinate, 'WHITE_SOLOON'),
  BLUE_SOLOON: (coordinate: MapCoordinate) =>
    new Soloon(coordinate, 'BLUE_SOLOON'),
  RED_SOLOON: (coordinate: MapCoordinate) =>
    new Soloon(coordinate, 'BLUE_SOLOON'),
  PURPLE_SOLOON: (coordinate: MapCoordinate) =>
    new Soloon(coordinate, 'PURPLE_SOLOON'),
  RIGHT_COMETH: (coordinate: MapCoordinate) =>
    new Cometh(coordinate, 'RIGHT_COMETH'),
  LEFT_COMETH: (coordinate: MapCoordinate) =>
    new Cometh(coordinate, 'LEFT_COMETH'),
  UP_COMETH: (coordinate: MapCoordinate) => new Cometh(coordinate, 'UP_COMETH'),
  DOWN_COMETH: (coordinate: MapCoordinate) =>
    new Cometh(coordinate, 'DOWN_COMETH'),
} as const;

export type MapElementType = keyof typeof elementsCreatorFns;

export class MapElementFactory implements IMapElementFactory {
  createElement(
    coordinate: MapCoordinate,
    elementType: MapElementType
  ): IMapElement {
    const creatorFn = elementsCreatorFns[elementType];
    if (!creatorFn) {
      throw new Error(`Unknown element type: ${elementType}`);
    }
    return creatorFn(coordinate);
  }
}
