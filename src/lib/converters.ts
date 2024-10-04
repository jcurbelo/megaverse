import {
  Cometh,
  ComethDirection,
  MapCoordinate,
  MapElementEndpoints,
  MapElementRequest,
  MapGoalElementType,
  Polyanet,
  Soloon,
  SoloonColor,
} from '../types/api';

export const convertToMapElementRequest = (
  goalElement: Omit<MapGoalElementType, 'SPACE'>,
  coordinate: MapCoordinate
): MapElementRequest => {
  switch (goalElement) {
    case 'POLYANET':
      return {
        element: { ...coordinate } as Polyanet,
        apiEndpoint: 'polyanets' as MapElementEndpoints,
      };
    case 'WHITE_SOLOON':
    case 'BLUE_SOLOON':
    case 'RED_SOLOON':
    case 'PURPLE_SOLOON':
      const color: SoloonColor = goalElement
        .split('_')[0]
        .toLowerCase() as SoloonColor;
      return {
        element: { ...coordinate, color } as Soloon,
        apiEndpoint: 'soloons' as MapElementEndpoints,
      };
    case 'RIGHT_COMETH':
    case 'LEFT_COMETH':
    case 'UP_COMETH':
    case 'DOWN_COMETH':
      const direction: ComethDirection = goalElement
        .split('_')[0]
        .toLowerCase() as ComethDirection;
      return {
        element: { ...coordinate, direction } as Cometh,
        apiEndpoint: 'comeths' as MapElementEndpoints,
      };
    default:
      throw new Error(`Unknown element type: ${goalElement}`);
  }
};

export const getMapElementRequests = (
  map: MapGoalElementType[][]
): MapElementRequest[] => {
  const requests: MapElementRequest[] = [];
  map.forEach((row, rowIdx) => {
    row.forEach((element, columnIdx) => {
      if (element === 'SPACE') {
        return;
      }
      const request = convertToMapElementRequest(element, {
        row: rowIdx,
        column: columnIdx,
      });
      if (request) {
        requests.push(request);
      }
    });
  });
  return requests;
};
