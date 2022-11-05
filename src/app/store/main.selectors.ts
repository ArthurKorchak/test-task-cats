import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './main.reducer';

export namespace MainSelectors {
  export const allState = createFeatureSelector<AppState>('main');

  export const breeds = createSelector(allState, state => state.breeds);

  export const images = createSelector(allState, state => state.images);

  export const totalPages = createSelector(allState, state => state.totalPages);

  export const currentPage = createSelector(allState, state => state.currentPage);
}