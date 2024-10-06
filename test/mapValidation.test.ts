import { MapService } from '../src/services/mapService';
import { MapElementFactory } from '../src/factories/mapElementFactory';
import { validMap } from './fixtures/validMap';
import { invalidMap } from './fixtures/invalidMap';

describe('Map Validation', () => {
  const mapService = new MapService(new MapElementFactory());

  it('should validate a correct map', () => {
    const map = mapService.buildMap(validMap);
    expect(mapService.validateMap(map)).toBe(true);
  });

  it('should invalidate an incorrect map', () => {
    const map = mapService.buildMap(invalidMap);
    expect(mapService.validateMap(map)).toBe(false);
  });
});
