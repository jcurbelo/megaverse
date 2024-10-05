export type MapGoalElementType =
  | 'SPACE'
  | 'POLYANET'
  | 'WHITE_SOLOON'
  | 'BLUE_SOLOON'
  | 'RED_SOLOON'
  | 'PURPLE_SOLOON'
  | 'RIGHT_COMETH'
  | 'LEFT_COMETH'
  | 'UP_COMETH'
  | 'DOWN_COMETH';

export type MapGoal = MapGoalElementType[][];
export type Map = MapElement[][];

export type MapResponse = {
  map: {
    content: Map;
  };
};

export type MapGoalResponse = {
  goal: MapGoal;
};

export interface MapCoordinate {
  row: number;
  column: number;
}

export interface MapElement extends MapCoordinate {}

export interface Polyanet extends MapElement {}

export type SoloonColor = 'blue' | 'red' | 'purple' | 'white';

export interface Soloon extends MapElement {
  color: SoloonColor;
}

export type ComethDirection = 'up' | 'down' | 'right' | 'left';
export interface Cometh extends MapElement {
  direction: ComethDirection;
}

export type MapElementEndpoints = 'polyanets' | 'soloons' | 'comeths';

export type MapElementRequest = {
  element: MapElement;
  apiEndpoint: string;
};
