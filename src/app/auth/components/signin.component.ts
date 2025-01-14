import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Sign In</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form #signInForm="ngForm">
          <mat-form-field appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput type="email" ngModel name="email" required>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Password</mat-label>
            <input matInput type="password" ngModel name="password" required>
          </mat-form-field>
          <button mat-raised-button color="primary">Sign In</button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `]
})
export class SigninComponent {}