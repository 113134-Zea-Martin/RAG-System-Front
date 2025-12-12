import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  constructor(private uploadService: UploadService, private router: Router) { }

  // ...existing code...
  title = '';
  content = '';
  loading = false;
  ready = false;
  progress = 0;

  uploadResponse: any = null;
  uploadResponseMessage: string | null = null;

  generateEmbeddingsResponse: any = null;
  generateEmbeddingsResponseMessage: string | null = null;

    // Método para verificar si el formulario está completo
  isFormValid(): boolean {
    return this.title.trim().length > 0 && this.content.trim().length > 0;
  }

  // upload() {
  //   // placeholder: implementar llamada backend para subir documento

  //   this.ready = false;
  //   this.loading = true;
  //   this.progress = 20;
  //   // simular subida
  //   const t = setInterval(() => {
  //     this.progress += 15;
  //     if (this.progress >= 100) {
  //       clearInterval(t);
  //       this.progress = 100;
  //       this.loading = false;
  //       this.ready = true;
  //     }
  //   }, 400);
  // }

  upload() {

        if (!this.isFormValid()) {
      return; // No hacer nada si el formulario no es válido
    }

    // this.ready = false;
    // this.loading = true;
    // this.progress = 0;
    this.uploadResponse = null;
    this.uploadResponseMessage = null;
    this.uploadService.uploadDocument({ title: this.title, content: this.content }).subscribe({
      next: (response) => {
        // guardar la respuesta para mostrarla en la UI
        this.uploadResponse = response;
        // intentamos extraer un mensaje legible si existe
        if (response && typeof response === 'object') {
          this.uploadResponseMessage = response.message ?? (response.document_id ? `Uploaded (id: ${response.document_id})` : JSON.stringify(response));
        } else {
          this.uploadResponseMessage = String(response);
        }

        // const t = setInterval(() => {
        //   this.progress += 20;
        //   if (this.progress >= 100) {
        //     clearInterval(t);
        //     this.progress = 100;
        //     this.loading = false;
        //     this.ready = true;
        //   }
        // }, 500);
      },
      error: (err) => {
        this.loading = false;
        this.ready = false;
        console.error('Error uploading document:', err);
      }
    });
  }

  // generate() {
  //   // placeholder: llamar a backend para generar embeddings
  //   this.ready = false;
  //   this.loading = true;
  //   this.progress = 10;
  //   const t = setInterval(() => {
  //     this.progress += 20;
  //     if (this.progress >= 100) {
  //       clearInterval(t);
  //       this.progress = 100;
  //       this.loading = false;
  //       this.ready = true;
  //     }
  //   }, 500);
  // }

  generate() {
    if (!this.uploadResponse || !this.uploadResponse.document_id) {
      console.error('No document ID available for generating embeddings.');
      return;
    }
    this.ready = false;
    this.loading = true;
    this.progress = 0;
    this.generateEmbeddingsResponse = null;
    this.generateEmbeddingsResponseMessage = null;
    this.uploadService.generateEmbeddings(this.uploadResponse.document_id).subscribe({
      next: (response) => {
        this.generateEmbeddingsResponse = response;
        if (response && typeof response === 'object') {
          this.generateEmbeddingsResponseMessage = response.message ?? JSON.stringify(response);
        } else {
          this.generateEmbeddingsResponseMessage = String(response);
        }

        const t = setInterval(() => {
          this.progress += 20;
          if (this.progress >= 100) {
            clearInterval(t);
            this.progress = 100;
            this.loading = false;
            this.ready = true;
          }
        }, 500);
      },
      error: (err) => {
        this.loading = false;
        this.ready = false;
        console.error('Error generating embeddings:', err);
      }
    });
  }
}