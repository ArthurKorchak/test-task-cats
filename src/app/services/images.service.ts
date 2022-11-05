import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { API_KEY, API_URL } from '../constants/api-params';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages(limit: number, page: number, breed_id = '') {

    const headers = new HttpHeaders({ 'x-api-key': API_KEY })
    const params = new HttpParams().appendAll({ limit, page: page - 1, breed_id, order: "ASC" })
    
    return this.http.get<Image[]>(`${API_URL}/v1/images/search`, { headers: headers, params: params, observe: "response" });

  };
};
