import { Converter } from '../src/lib/converters';
import { MapElementFactory } from '../src/factories/mapElementFactory';
import { validMap } from './fixtures/validMap';
import { invalidMap } from './fixtures/invalidMap';

describe('Map Validation', () => {
  const factory = new MapElementFactory();
  const converter = new Converter(factory);

  it('should validate a correct map', () => {
    const map = converter.buildMap(validMap);
    expect(converter.validateMap(map)).toBe(true);
  });

  it('should invalidate an incorrect map', () => {
    const map = converter.buildMap(invalidMap);
    expect(converter.validateMap(map)).toBe(false);
  });
});
