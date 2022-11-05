import { Component, OnInit } from '@angular/core';
import { BreedsService } from './services/breeds.service';
import { ImagesService } from './services/images.service';
import { Observable } from 'rxjs';
import { Breed } from './models/breed';
import { Store } from '@ngrx/store';
import { MainActions } from './store/main.actions';

@Component({
  selector: 'app-root',
  template: `
        <header>
          <app-form></app-form>
        </header>
        <body>
          <app-pagination></app-pagination>
          <app-images-list></app-images-list>
          <app-pagination></app-pagination>
        </body>
  `,
  styles: []
})
export class AppComponent {


  constructor(
    private breedsService: BreedsService,
    private imagesService: ImagesService,
    private store$: Store
  ) { };

  ngOnInit(): void {
    this.breedsService.getBreeds()
      .subscribe(res => {
        this.store$.dispatch(MainActions.setBreeds({breeds: res}))
      });

    this.imagesService.getImages(10, 1)
      .subscribe(res => {
        this.store$.dispatch(MainActions.setImages({ images: res.body ? res.body : [] }))
      });
  };
};
