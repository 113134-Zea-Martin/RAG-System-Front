import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AskResponse, SearchResponse } from '../interfaces/models';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class AskService {
  // private apiUrl = 'http://localhost:8000'; // Reemplaza con la URL de tu backend
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  seach(query: string): Observable<SearchResponse> {
    const url = `${this.apiUrl}/search`;
    return this.http.post<SearchResponse>(url, { query });
  }

  ask(question: string): Observable<AskResponse> {
    const url = `${this.apiUrl}/ask`;
    return this.http.post<AskResponse>(url, { question });
  }

}
