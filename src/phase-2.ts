import { createMapElement, getGoalMap } from './api/map';
import { getMapElementRequests } from './lib/converters';
import { batchExecute } from './lib/helpers';

const phaseTwo = async () => {
  const map = await getGoalMap();
  const requests = getMapElementRequests(map.goal);

  await batchExecute(requests, createMapElement, {
    batchSize: 2,
    delayMs: 2000,
  });
};

phaseTwo()
  .then(() => {
    console.log('Phase 2 completed');
  })
  .catch((error) => console.error('Error:', error));
