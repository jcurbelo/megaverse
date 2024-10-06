import { MapService } from '../src/services/mapService';
import { MapElementType } from '../src/factories/mapElementFactory';
import { CustomMapElementFactory } from './factories/customMapElementFactory';

describe('Map Extension', () => {
  const mapService = new MapService(new CustomMapElementFactory());

  it('should allow adding custom elements', () => {
    const customMap: (MapElementType | 'CUSTOM_ELEMENT')[][] = [
      ['SPACE', 'POLYANET', 'CUSTOM_ELEMENT'],
      ['BLUE_SOLOON', 'SPACE', 'RIGHT_COMETH'],
      ['POLYANET', 'SPACE', 'CUSTOM_ELEMENT'],
    ];

    const map = mapService.buildMap(customMap);
    expect(mapService.validateMap(map)).toBe(true);
  });

  it('should validate custom element rules', () => {
    const invalidCustomMap: (MapElementType | 'CUSTOM_ELEMENT')[][] = [
      ['SPACE', 'POLYANET', 'CUSTOM_ELEMENT'],
      ['CUSTOM_ELEMENT', 'SPACE', 'RIGHT_COMETH'], // CUSTOM_ELEMENT on odd row
      ['SPACE', 'POLYANET', 'CUSTOM_ELEMENT'],
    ];

    const map = mapService.buildMap(invalidCustomMap);
    expect(mapService.validateMap(map)).toBe(false);
  });
});
