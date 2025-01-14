import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Documentation</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Documentation content goes here.</p>
      </mat-card-content>
    </mat-card>
  `
})
export class DocsComponent {}