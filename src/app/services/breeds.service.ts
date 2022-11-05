import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_KEY, API_URL } from '../constants/api-params';
import { Breed } from '../models/breed';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  getBreeds() {

    const headers = new HttpHeaders({ 'x-api-key': API_KEY });

    return this.http.get<Breed[]>(`${API_URL}/v1/breeds`, { headers: headers });
  
  };
};