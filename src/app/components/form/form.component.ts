import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Breed } from 'src/app/models/breed';
import { MainSelectors } from 'src/app/store/main.selectors';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public myControl = new FormControl('All');
  public filteredOptions: Observable<string[]>;
  private options: string[] = [];
  private breeds: Breed[] = [];

  constructor(private store$: Store, private imagesService: ImagesService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  };

  ngOnInit() {
    this.store$.select(MainSelectors.breeds).subscribe(resp => {
      this.options = ['All', ...resp.map(elem => elem.name)];
      this.breeds = resp;
    });
  };

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  };

  public onSubmit() {
    const id = this.breeds.find(elem => elem.name === this.myControl.value)?.id;
    this.imagesService.getImages(10, 1, id);
  };
};
