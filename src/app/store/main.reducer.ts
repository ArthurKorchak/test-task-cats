import { createReducer, on } from '@ngrx/store';
import { MainActions } from './main.actions';
import { Breed } from '../models/breed';
import { Image } from '../models/image';

export interface AppState {
  breeds: Breed[];
  images: Image[];
  totalImages: number;
  sizeOfPage: number;
  currentPage: number
};

const initialState: AppState = {
  breeds: [],
  images: [],
  totalImages: 0,
  sizeOfPage: 10,
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

  on(MainActions.setTotalImages, (state, { totalImages }) => ({
    ...state,
    totalImages: totalImages
  })),

  on(MainActions.setSizeOfPage, (state, { sizeOfPage }) => ({
    ...state,
    sizeOfPage: sizeOfPage
  })),

  on(MainActions.setCurrentPage, (state, { currentPage }) => ({
    ...state,
    currentPage: currentPage
  }))
);