import { MapElementType } from '../factories/mapElementFactory';
import { IMapElementFactory } from '../interfaces/IMapElementFactory';
import { MapCoordinate, MapElementRequest } from '../types/api';

export class Converter {
  constructor(private factory: IMapElementFactory) {}

  convertToMapElementRequest(
    elementType: MapElementType,
    coordinate: MapCoordinate
  ): MapElementRequest {
    const element = this.factory.createElement(coordinate, elementType);
    return element.getRequest();
  }

  getMapElementRequests(map: MapElementType[][]): MapElementRequest[] {
    const requests: MapElementRequest[] = [];
    map.forEach((row, rowIdx) => {
      row.forEach((element, columnIdx) => {
        if (element === 'SPACE') {
          return;
        }
        const request = this.convertToMapElementRequest(element, {
          row: rowIdx,
          column: columnIdx,
        });
        if (request) {
          requests.push(request);
        }
      });
    });
    return requests;
  }
}
