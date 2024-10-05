import { createMapElement, getGoalMap } from './api/map';
import { getMapElementRequests } from './lib/converters';
import { batchExecute } from './lib/helpers';

const generateMap = async () => {
  const map = await getGoalMap();
  const requests = getMapElementRequests(map.goal);

  await batchExecute(requests, createMapElement);
};

generateMap()
  .then(() => {
    console.log('Map generated!');
  })
  .catch((error) => console.error('Error:', error));
