import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerateEmbeddingsResponse, UploadRequest, UploadResponse } from '../interfaces/models';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // private baseUrl = 'http://localhost:8000';
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  uploadDocument(UploadRequest: UploadRequest): Observable<UploadResponse> {
    const url = `${this.baseUrl}/upload`;
    return this.http.post<UploadResponse>(url, UploadRequest);
  }

  generateEmbeddings(documentId: string): Observable<GenerateEmbeddingsResponse> {
    const url = `${this.baseUrl}/generate-embeddings`;
    return this.http.post<GenerateEmbeddingsResponse>(url, { document_id: documentId });
  } 
}