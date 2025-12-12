export interface UploadRequest {
  title: string;
  content: string;
}
export interface UploadResponse {
  message: string;
  document_id: string;
}

export interface GenerateEmbeddingsRequest {
  document_id: string;
}
export interface GenerateEmbeddingsResponse {
  message: string;
}

export interface SearchRequest {
  query: string;
}
export interface SearchResultItem {
  // Ajustá según lo que devuelva tu backend
  document_id?: string;
  title?: string;
  content_snippet?: string;
  similarity_score?: number;
}
export interface SearchResponse {
  results: SearchResultItem[];
}

export interface AskRequest {
  question: string;
}
export interface AskContextItem {
  content_snippet?: string;
  similarity_score?: number;
  [k: string]: any;
}
export interface AskResponse {
  question: string;
  answer: string;
  context_used: AskContextItem[];
  grounded: boolean;
}