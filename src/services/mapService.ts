import { Map } from '../elements/map';
import { MapElementType } from '../factories/mapElementFactory';
import { IMapElementFactory } from '../interfaces/IMapElementFactory';
import { IMapService } from '../interfaces/IMapService';
import { MapElementRequest } from '../types/api';

export class MapService implements IMapService {
  constructor(private factory: IMapElementFactory) {}

  getMapElementRequests(map: Map): MapElementRequest[] {
    const requests: MapElementRequest[] = [];
    map.forEach((row) => {
      row.forEach((element) => {
        const request = element.getRequest();
        if (request) {
          requests.push(request);
        }
      });
    });
    return requests;
  }

  buildMap(goal: (MapElementType | string)[][]): Map {
    return goal.map((row, rowIdx) =>
      row.map((elementType, columnIdx) =>
        this.factory.createElement(
          { row: rowIdx, column: columnIdx },
          elementType
        )
      )
    );
  }

  validateMap(map: Map): boolean {
    return map.every((row) => row.every((element) => element.check(map)));
  }
}
