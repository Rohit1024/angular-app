import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, AsyncPipe } from '@angular/common';
import { SidenavService } from '../services/side-nav.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, AsyncPipe],
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav [opened]="sidenavService.isOpen$ | async" [mode]="'side'" class="sidenav">
        <div class="brand-logo">
          <mat-icon class="logo-icon">widgets</mat-icon>
          <span class="brand-text">MyApp</span>
        </div>
        <mat-nav-list>
          <a mat-list-item>
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Dashboard</span>
          </a>
          <a mat-list-item>
            <mat-icon matListItemIcon>person</mat-icon>
            <span matListItemTitle>Profile</span>
          </a>
          <a mat-list-item>
            <mat-icon matListItemIcon>account_circle</mat-icon>
            <span matListItemTitle>Account</span>
          </a>
          <a mat-list-item>
            <mat-icon matListItemIcon>attach_money</mat-icon>
            <span matListItemTitle>Pricing</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content [style.marginLeft]="(sidenavService.isOpen$ | async) ? '200px' : '0'">
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