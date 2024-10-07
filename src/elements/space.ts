import { MapElementRequest } from '../types/api';
import { BaseMapElement } from './baseElement';

export class Space extends BaseMapElement {
  public getRequest(): MapElementRequest {
    return undefined;
  }
  public check(): boolean {
    return true;
  }
}
