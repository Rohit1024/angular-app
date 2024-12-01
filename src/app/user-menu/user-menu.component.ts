import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule
  ],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="userMenu" aria-label="User menu">
      <mat-icon>person</mat-icon>
    </button>
    <mat-menu #userMenu="matMenu" class="user-menu">
     <button mat-menu-item>
      <div class="user-profile">
        <div class="avatar">
          <img src="https://i.pravatar.cc/100" alt="User avatar" />
        </div>
        <div class="user-info">
          <div class="name">John Doe</div>
          <div class="email">john.doe.com</div>
        </div>
      </div>
       </button>
      <mat-divider></mat-divider>
      <button mat-menu-item>
        <mat-icon>person</mat-icon>
        <span>Profile</span>
      </button>
      <button mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </button>
      <button mat-menu-item>
        <mat-icon>dashboard</mat-icon>
        <span>Dashboard</span>
      </button>
      <mat-divider></mat-divider>
      <button mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
  styles: [`
    mat-divider {
      margin: 8px 0;
    }
    .user-profile {
      padding: 16px;
      text-align: center;
    }
    .avatar {
      margin-bottom: 8px;
    }
    .avatar img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
    .user-info {
      line-height: 1.5;
    }
    .name {
      font-weight: 500;
      font-size: 16px;
    }
    .email {
      font-size: 14px;
    }
    ::ng-deep .user-menu {
      min-width: 240px !important;
    }
  `]
})
export class UserMenuComponent {}