import { createMapElement, getGoalMap } from './api/map';
import { getMapElementRequests } from './lib/converters';
import { batchExecute } from './lib/helpers';

const phaseOne = async () => {
  const map = await getGoalMap();
  const requests = getMapElementRequests(map.goal);

  await batchExecute(requests, createMapElement);
};

phaseOne()
  .then(() => {
    console.log('Phase 1 completed');
  })
  .catch((error) => console.error('Error:', error));
