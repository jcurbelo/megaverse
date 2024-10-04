import ky from 'ky';
import { Env } from '../lib/env';
import { MapGoalResponse, MapResponse, PolyanetRequest } from '../types/api';

export const getGoalMap = () =>
  ky<MapGoalResponse>(
    `${Env.BASE_API_URL}/map/${Env.CANDIDATE_ID}/goal`
  ).json();

export const getMap = () =>
  ky<MapResponse>(`${Env.BASE_API_URL}/map/${Env.CANDIDATE_ID}`).json();

export const createPolyanet = (request: PolyanetRequest) =>
  ky.post(`${Env.BASE_API_URL}/polyanets`, {
    json: { ...request, candidateId: Env.CANDIDATE_ID },
  });

export const deletePolyanet = (request: PolyanetRequest) =>
  ky.delete(`${Env.BASE_API_URL}/polyanets`, {
    json: { ...request, candidateId: Env.CANDIDATE_ID },
  });
