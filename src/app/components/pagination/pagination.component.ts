import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { ImagesService } from 'src/app/services/images.service';
import { MainActions } from 'src/app/store/main.actions';
import { MainSelectors } from 'src/app/store/main.selectors';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [ ]
})
export class PaginationComponent implements OnInit {
  
  private currentID: string = '';
  public length: number = 0;
  public pageSize: number = 10;
  public currentPage = 1

  constructor(private store$: Store, private imagesService: ImagesService,) { };

  ngOnInit(): void {
    this.store$.select(MainSelectors.totalImages).subscribe(resp => {
      this.length = resp;
    });

    this.store$.select(MainSelectors.sizeOfPage).subscribe(resp => {
      this.pageSize = resp;
    });

    this.store$.select(MainSelectors.currentPage).subscribe(resp => {
      this.currentPage = resp;
    });

    this.store$.select(MainSelectors.images).subscribe(resp => {
      if (resp[1]?.breeds[0]?.id) {
        this.currentID = resp[0].breeds[0].id;
      };
    });
  };

  public onPagChanged({pageIndex, pageSize}: PageEvent) {
    if (this.currentPage !== pageIndex + 1 && this.pageSize === pageSize) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.store$.dispatch(MainActions.setCurrentPage({ currentPage: pageIndex + 1 }));
      this.imagesService.getImages(this.pageSize, this.currentPage, this.currentID);
    };
    
    if (this.pageSize !== pageSize) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.store$.dispatch(MainActions.setCurrentPage({ currentPage: 1 }));
      this.store$.dispatch(MainActions.setSizeOfPage({ sizeOfPage: pageSize }));
      this.imagesService.getImages(this.pageSize, 1, this.currentID);
    };
  };
};
