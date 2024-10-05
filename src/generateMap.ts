import { createMapElement, getGoalMap } from './api/map';
import { Converter } from './lib/converters';
import { MapElementFactory } from './factories/mapElementFactory';
import { batchExecute } from './lib/helpers';
import { MapElementRequest } from './types/api';

const generateMap = async () => {
  console.log('Starting map generation...');

  const map = await getGoalMap();
  console.log('Goal map retrieved');

  const factory = new MapElementFactory();
  const converter = new Converter(factory);

  const requests = converter.getMapElementRequests(map.goal);
  console.log(`Total elements to be created: ${requests.length}`);

  console.log('Starting batch execution...');

  await batchExecute(requests, async (request: MapElementRequest) => {
    console.log(`Creating element at (${request.element.row}, ${request.element.column})`);
    await createMapElement(request);
    console.log(`Element created at (${request.element.row}, ${request.element.column})`);
  });
};

generateMap()
  .then(() => {
    console.log('Map generated!');
  })
  .catch((error) => console.error('Error:', error));
