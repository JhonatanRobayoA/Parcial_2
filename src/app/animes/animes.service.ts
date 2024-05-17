import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animes } from './animes';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
private apiUrl: string = environment.baseUrl;
constructor(private http: HttpClient) { }
getAnimes(): Observable<Animes[]>{
  return this.http.get<Animes[]>(this.apiUrl);
}
}
