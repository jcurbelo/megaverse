import { IConverter } from '../interfaces/IConverter';
import { Map } from '../elements/map';
import { Space } from '../elements/space';
import { MapElementType } from '../factories/mapElementFactory';
import { IMapElement } from '../interfaces/IMapElement';
import { IMapElementFactory } from '../interfaces/IMapElementFactory';
import { MapElementRequest } from '../types/api';

export class Converter implements IConverter {
  constructor(private factory: IMapElementFactory) {}

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

  convertToMapElementRequest(element: IMapElement): MapElementRequest {
    return element.getRequest();
  }

  getMapElementRequests(map: Map): MapElementRequest[] {
    const requests: MapElementRequest[] = [];
    map.forEach((row) => {
      row.forEach((element) => {
        // skip space
        if (element instanceof Space) {
          return;
        }
        const request = this.convertToMapElementRequest(element);
        if (request) {
          requests.push(request);
        }
      });
    });
    return requests;
  }

  validateMap(map: Map): boolean {
    return map.every((row) => row.every((element) => element.check(map)));
  }
}
