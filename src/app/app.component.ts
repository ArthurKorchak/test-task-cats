import { Component, OnInit } from '@angular/core';
import { BreedsService } from './services/breeds.service';
import { ImagesService } from './services/images.service';
import { Observable } from 'rxjs';
import { Breed } from './models/breed';

@Component({
  selector: 'app-root',
  template: `
        <app-form></app-form>
        <app-pagination></app-pagination>
  `,
  styles: []
})
export class AppComponent {
  breeds: Breed[] = [];

  

  constructor(private breedsService: BreedsService, private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.breedsService.getBreeds()
      .subscribe(res => {
        this.breeds = res
        console.log(res);
      });

    this.imagesService.getImages(10, 1, 'aege')
      .subscribe(res => {
        console.log(res.body);
        console.log(res.headers.get('pagination-count'));
      });

  }
}
