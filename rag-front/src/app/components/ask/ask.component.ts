import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AskService } from '../../services/ask.service';

@Component({
  selector: 'app-ask',
  standalone: true,
    imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.css'
})
export class AskComponent {
  question = '';

  // estados separados para cada llamada
  loadingSearch = false;
  loadingAsk = false;

  searchResponse: any = null;
  searchResponseText: string | null = null;
  searchSources: any[] = [];

  askResponse: any = null;
  askResponseText: string | null = null;
  askSources: any[] = [];
  askGrounded = false;

  constructor(private askService: AskService) {}

  isFormValid(): boolean {
    return  this.question.trim().length > 0;
  }

  ask() {
    if (!this.isFormValid()) return;

    // reset
    this.searchResponse = null;
    this.searchResponseText = null;
    this.searchSources = [];
    this.loadingSearch = true;

    this.askResponse = null;
    this.askResponseText = null;
    this.askSources = [];
    this.askGrounded = false;
    this.loadingAsk = true;

    // Primera llamada: Search
    this.askService.seach(this.question).subscribe({
      next: (searchRes) => {
        this.searchResponse = searchRes;
        this.searchResponseText = JSON.stringify(searchRes, null, 2);
        this.searchSources = searchRes.results || [];
        this.loadingSearch = false;
        // Segunda llamada: Ask
        this.askService.ask(this.question).subscribe({
          next: (askRes) => {
            this.askResponse = askRes;
            this.askResponseText = JSON.stringify(askRes, null, 2);
            this.askSources = askRes.context_used || [];
            this.askGrounded = askRes.grounded;
            this.loadingAsk = false;
          },
          error: (err) => {
            console.error('Error en la llamada Ask:', err);
            this.loadingAsk = false;
          }
        });
      },
      error: (err) => {
        console.error('Error en la llamada Search:', err);
        this.loadingSearch = false;
        this.loadingAsk = false; // también detenemos Ask si Search falla
      }
    });

  }
}
