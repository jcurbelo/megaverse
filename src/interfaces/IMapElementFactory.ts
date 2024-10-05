import { MapCoordinate } from '../types/api';
import { IMapElement } from './IMapElement';

export interface IMapElementFactory {
  createElement(coordinate: MapCoordinate, elementType: string): IMapElement;
}
