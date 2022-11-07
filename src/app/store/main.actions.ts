import { createAction, props } from '@ngrx/store';
import { Breed } from '../models/breed';
import { Image } from '../models/image';

export namespace MainActions {
  export const setBreeds = createAction(
    'SET_BREEDS',
    props<{ breeds: Breed[] }>()
  );

  export const setImages = createAction(
    'SET_IMAGES',
    props<{ images: Image[] }>()
  );

  export const setTotalImages = createAction(
    'SET_TOTAL_IMAGES',
    props<{ totalImages: number }>()
  );

  export const setSizeOfPage = createAction(
    'SET_SIZE-OF_PAGE',
    props<{ sizeOfPage: number }>()
  );

  export const setCurrentPage = createAction(
    'SET_CURRENT_PAGE',
    props<{ currentPage: number }>()
  );
};