import { IMapElement } from '../interfaces/IMapElement';
import { Map } from '../elements/map';
import { MapElementType } from '../factories/mapElementFactory';
import { MapElementRequest } from '../types/api';

export interface IConverter {
  buildMap(goal: MapElementType[][]): Map;
  convertToMapElementRequest(element: IMapElement): MapElementRequest;
  getMapElementRequests(map: Map): MapElementRequest[];
  validateMap(map: Map): boolean;
}
