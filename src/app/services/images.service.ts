import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { API_KEY, API_URL } from '../constants/api-params';
import { MainActions } from '../store/main.actions';
import { Image } from '../models/image';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient, private store$: Store) { };

  getImages(limit: number, page: number, breed_id = ''): void {
    const headers = new HttpHeaders({ 'x-api-key': API_KEY });
    const params = new HttpParams().appendAll({ limit, page: page - 1, breed_id, order: "ASC" });
    this.http.get<Image[]>(`${API_URL}/v1/images/search`, { headers: headers, params: params, observe: "response" })
      .subscribe(res => {
        const paginationCount = res.headers.get('pagination-count');
        this.store$.dispatch(MainActions.setImages({ images: res.body ? res.body : [] }));
        this.store$.dispatch(MainActions.setTotalImages({ totalImages: paginationCount ? +paginationCount : 0 }));
      });
  };
};
