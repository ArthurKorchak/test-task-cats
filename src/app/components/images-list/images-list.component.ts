import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Image } from 'src/app/models/image';
import { MainSelectors } from 'src/app/store/main.selectors';


@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
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
