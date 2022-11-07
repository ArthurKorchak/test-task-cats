import { Component, OnInit } from '@angular/core';
import { BreedsService } from './services/breeds.service';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private breedsService: BreedsService,
    private imagesService: ImagesService,
  ) { };

  ngOnInit(): void {
    this.breedsService.getBreeds();
    this.imagesService.getImages(10, 1);
  };
};
