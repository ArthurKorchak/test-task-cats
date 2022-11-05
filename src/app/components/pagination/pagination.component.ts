import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-pagination',
  template: `
    <mat-paginator [length]="100"
      [pageSize]="10"
      [pageSizeOptions]="[5, 10, 25]"
      aria-label="Select page">
    </mat-paginator>
  `,
  styles: [
  ]
})
export class PaginationComponent implements OnInit {

  constructor(private store$: Store, private imagesService: ImagesService) { }

  ngOnInit(): void {

  }

}
