import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../services/side-nav.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, RouterLink],
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav [opened]="sidenavService.isOpenComputed()" [mode]="'side'" class="sidenav">
        <div class="brand-logo">
          <mat-icon class="logo-icon">widgets</mat-icon>
          <span class="brand-text">MyApp</span>
        </div>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard">
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Dashboard</span>
          </a>
          <a mat-list-item routerLink="/docs">
            <mat-icon matListItemIcon>description</mat-icon>
            <span matListItemTitle>Docs</span>
          </a>
          <a mat-list-item>
            <mat-icon matListItemIcon>person</mat-icon>
            <span matListItemTitle>Profile</span>
          </a>
          <a mat-list-item>
            <mat-icon matListItemIcon>account_circle</mat-icon>
            <span matListItemTitle>Account</span>
          </a>
          <a mat-list-item routerLink="/auth/signin">
            <mat-icon matListItemIcon>login</mat-icon>
            <span matListItemTitle>Sign In</span>
          </a>
          <a mat-list-item routerLink="/auth/signup">
            <mat-icon matListItemIcon>person_add</mat-icon>
            <span matListItemTitle>Sign Up</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content [style.marginLeft]="sidenavService.isOpenComputed() ? '200px' : '0'">
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      height: 100vh;
    }
    .sidenav {
      width: 200px;
      background: inherit;
    }
    .brand-logo {
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
    .logo-icon {
      transform: scale(1.5);
    }
    .brand-text {
      font-size: 20px;
      font-weight: 500;
    }
    .dark-theme .brand-logo {
      border-bottom-color: rgba(255, 255, 255, 0.12);
    }
  `]
})
export class SidenavComponent {
  public sidenavService = inject(SidenavService)
}