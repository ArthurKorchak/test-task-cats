import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <mat-paginator [length]="100"
      [pageSize]="10"
      [pageSizeOptions]="[5, 10, 25, 100]"
      aria-label="Select page">
    </mat-paginator>
  `,
  styles: [
  ]
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
