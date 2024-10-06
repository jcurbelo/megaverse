import { createMapElement, getGoalMap } from './api/map';
import { MapElementFactory } from './factories/mapElementFactory';
import { batchExecute } from './lib/helpers';
import { MapService } from './services/mapService';
import { MapElementRequest } from './types/api';

const generateMap = async () => {
  console.log('Starting map generation...');

  const mapService = new MapService(new MapElementFactory());

  const { goal } = await getGoalMap();
  console.log('Goal map retrieved');

  const map = mapService.buildMap(goal);
  const isMapValid = mapService.validateMap(map);

  if (!isMapValid) {
    throw new Error('Invalid map.');
  }
  console.log('Map is valid');

  const requests = mapService.getMapElementRequests(map);
  console.log(`Total elements to be created: ${requests.length}`);

  console.log('Starting batch execution...');

  const { errors } = await batchExecute(
    requests,
    async (request: MapElementRequest) => {
      console.log(
        `Creating element at (${request.element.row}, ${request.element.column})`
      );
      await createMapElement(request);
      console.log(
        `Element created at (${request.element.row}, ${request.element.column})`
      );
    }
  );

  if (errors.length > 0) {
    console.log('Errors occurred during batch execution:');
    errors.forEach((error) => console.error({ error }));
  }
};

generateMap()
  .then(() => {
    console.log('Map generated!');
  })
  .catch((error) => console.error('Error:', error));
