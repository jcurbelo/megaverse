import { MapElementRequest } from '../types/api';
import { BaseMapElement } from 'elements/baseElement';

export class Space extends BaseMapElement {
  endpoint?: string;
  public getRequest(): MapElementRequest {
    return undefined;
  }
}
