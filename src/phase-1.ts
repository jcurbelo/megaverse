import { batchExecute } from './lib/helpers';
import { createPolyanet, getGoalMap } from './api/map';
import { Map, MapCoordinate } from './types/api';

const getGoalMapCoordinates = (map: Map): MapCoordinate[] => {
  const coordinates: MapCoordinate[] = [];
  map.forEach((row, rowIdx) => {
    row.forEach((element, columnIdx) => {
      if (element === 'POLYANET') {
        coordinates.push({ row: rowIdx, column: columnIdx });
      }
    });
  });
  return coordinates;
};

const phaseOne = async () => {
  const map = await getGoalMap();
  const coordinates = getGoalMapCoordinates(map.goal);
  console.log({ coordinates });

  await batchExecute(coordinates, createPolyanet, {
    batchSize: 2,
    delayMs: 2000,
  });
};

phaseOne()
  .then(() => {
    console.log('Phase 1 completed');
  })
  .catch((error) => console.error('Error:', error));
