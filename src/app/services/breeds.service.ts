import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_KEY, API_URL } from '../constants/api-params';
import { MainActions } from '../store/main.actions';
import { Breed } from '../models/breed';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient, private store$: Store) { }

  getBreeds(): void {
    const headers = new HttpHeaders({ 'x-api-key': API_KEY });

    this.http.get<Breed[]>(`${API_URL}/v1/breeds`, { headers: headers })
      .subscribe(res => {
        this.store$.dispatch(MainActions.setBreeds({ breeds: res }));
      });
  };
};