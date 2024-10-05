import ky from 'ky';
import { Env } from '../lib/env';
import { MapElementRequest, MapGoalResponse, MapResponse } from '../types/api';

export const getGoalMap = () =>
  ky<MapGoalResponse>(
    `${Env.BASE_API_URL}/map/${Env.CANDIDATE_ID}/goal`
  ).json();

export const getMap = () =>
  ky<MapResponse>(`${Env.BASE_API_URL}/map/${Env.CANDIDATE_ID}`).json();

export const createMapElement = (request: MapElementRequest) =>
  ky.post(`${Env.BASE_API_URL}/${request.apiEndpoint}`, {
    json: { ...request.element, candidateId: Env.CANDIDATE_ID },
  });

export const deleteMapElement = (request: MapElementRequest) =>
  ky.delete(`${Env.BASE_API_URL}/${request.apiEndpoint}`, {
    json: {
      row: request.element.row,
      column: request.element.column,
      candidateId: Env.CANDIDATE_ID,
    },
  });
