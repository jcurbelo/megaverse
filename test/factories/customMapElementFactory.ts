import {
  MapElementFactory,
  MapElementType,
} from '../../src/factories/mapElementFactory';
import { MapCoordinate } from '../../src/types/api';
import { IMapElement } from '../../src/interfaces/IMapElement';
import { CustomElement } from '../elements/customElement';

export class CustomMapElementFactory extends MapElementFactory {
  createElement(
    coordinate: MapCoordinate,
    elementType: MapElementType | 'CUSTOM_ELEMENT'
  ): IMapElement {
    if (elementType === 'CUSTOM_ELEMENT') {
      return new CustomElement(coordinate, elementType);
    }
    return super.createElement(coordinate, elementType);
  }
}
