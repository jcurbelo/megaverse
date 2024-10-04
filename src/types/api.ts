export type MapElement = 'SPACE' | 'POLYANET' | 'SOLOON' | 'COMETH';

export type Map = MapElement[][];

export type MapResponse = {
  map: {
    content: Map;
  };
};

export type MapGoalResponse = {
  goal: Map;
};

export type MapCoordinate = {
  row: number;
  column: number;
};

export type MapElementRequest = MapCoordinate;

export type PolyanetRequest = MapElementRequest;

export type SoloonColor = 'blue' | 'red' | 'purple' | 'white';

export type SoloonRequest = MapElementRequest & {
  color: SoloonColor;
};

export type ComethRequest = MapElementRequest & {
  direction: 'up' | 'down' | 'right' | 'left';
};

export type BatchOptions = {
  batchSize?: number;
  delayMs?: number;
};
