import { Action, createReducer, on } from '@ngrx/store';
import { MainActions } from './main.actions';
import { Breed } from '../models/breed';
import { Image } from '../models/image';

export interface AppState {
  breeds: Breed[];
  images: Image[];
  imagesPerPage: number;
  totalPages: number;
  currentPage: number;
};

const initialState: AppState = {
  breeds: [],
  images: [],
  imagesPerPage: 10,
  totalPages: 1,
  currentPage: 1
};

export const mainReducer = createReducer(
  initialState,
  on(MainActions.setBreeds, (state, { breeds }) => ({
    ...state,
    breeds: breeds
  })),

  on(MainActions.setImages, (state, { images }) => ({
    ...state,
    images: images
  })),

  on(MainActions.setTotalPages, (state, { totalPages }) => ({
    ...state,
    totalPages: totalPages
  })),

  on(MainActions.setCurrentPage, (state, { currentPage }) => ({
    ...state,
    currentPage: currentPage
  }))
);