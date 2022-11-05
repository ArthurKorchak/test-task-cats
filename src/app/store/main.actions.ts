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

  export const setTotalPages = createAction(
    'SET_TOTAL_PAGES',
    props<{ totalPages: number }>()
  );

  export const setCurrentPage = createAction(
    'SET_CURRENT_PAGE',
    props<{ currentPage: number }>()
  );
};