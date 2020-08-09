import * as Types from './Types';
import { Action, ActionCreator } from 'redux';
import Match from '@the-orange-alliance/api/lib/models/Match';
import Team from '@the-orange-alliance/api/lib/models/Team';
import Event from '@the-orange-alliance/api/lib/models/Event';

export interface ISetTotalEventSize extends Action {
  type: Types.SET_TOTAL_EVENTS_COUNT;
  payload: { size: number };
}

export interface ISetTotalTeamSize extends Action {
  type: Types.SET_TOTAL_TEAMS_COUNT;
  payload: { size: number };
}

export interface ISetHighScoreOverall extends Action {
  type: Types.SET_HIGH_SCORE_MATCH_OVERALL;
  payload: { match: Match };
}

export interface ISetHighScoreQuals extends Action {
  type: Types.SET_HIGH_SCORE_MATCH_QUALS;
  payload: { match: Match };
}

export interface ISetHighScoreElims extends Action {
  type: Types.SET_HIGH_SCORE_MATCH_ELIMS;
  payload: { match: Match };
}

export interface ISetMatches extends Action {
  type: Types.SET_MATCHES;
  payload: { matches: Match[] };
}

export interface ISetTeams extends Action {
  type: Types.SET_TEAMS;
  payload: { teams: Team[] };
}

export interface ISetEvents extends Action {
  type: Types.SET_EVENTS;
  payload: { events: Event[] };
}

export const setTotalEventSize: ActionCreator<ISetTotalEventSize> = (
  size: number
) => ({
  type: Types.SET_TOTAL_EVENTS_COUNT,
  payload: { size }
});

export const setTotalTeamSize: ActionCreator<ISetTotalEventSize> = (
  size: number
) => ({
  type: Types.SET_TOTAL_TEAMS_COUNT,
  payload: { size }
});

export const setHighScoreOverall: ActionCreator<ISetHighScoreOverall> = (
  match: Match
) => ({
  type: Types.SET_HIGH_SCORE_MATCH_OVERALL,
  payload: { match }
});

export const setHighScoreQuals: ActionCreator<ISetHighScoreQuals> = (
  match: Match
) => ({
  type: Types.SET_HIGH_SCORE_MATCH_QUALS,
  payload: { match }
});

export const setHighScoreElims: ActionCreator<ISetHighScoreElims> = (
  match: Match
) => ({
  type: Types.SET_HIGH_SCORE_MATCH_ELIMS,
  payload: { match }
});

export const setMatches: ActionCreator<ISetMatches> = (matches: Match[]) => ({
  type: Types.SET_MATCHES,
  payload: { matches }
});

export const setTeams: ActionCreator<ISetTeams> = (teams: Team[]) => ({
  type: Types.SET_TEAMS,
  payload: { teams }
});

export const setEvents: ActionCreator<ISetEvents> = (events: Event[]) => ({
  type: Types.SET_EVENTS,
  payload: { events }
});

export type ApplicationActions =
  | ISetTotalEventSize
  | ISetTotalTeamSize
  | ISetHighScoreOverall
  | ISetHighScoreQuals
  | ISetHighScoreElims
  | ISetMatches
  | ISetTeams
  | ISetEvents;