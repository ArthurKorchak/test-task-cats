import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Image } from 'src/app/models/image';
import { MainSelectors } from 'src/app/store/main.selectors';


@Component({
  selector: 'app-images-list',
  template: `
    <mat-grid-list cols="5" rowHeight="2:1.5">
      <mat-grid-tile *ngFor="let image of images">
      <img [src]="image.url">
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
    `mat-grid-tile {
      background: lightblue;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }`
  ]
})
export class ImagesListComponent implements OnInit {

  public images: Image[] = [];

  constructor(private store$: Store) { };

  ngOnInit(): void {
    this.store$.select(MainSelectors.images).subscribe(resp => {
      this.images = resp;
    });
  };
};
