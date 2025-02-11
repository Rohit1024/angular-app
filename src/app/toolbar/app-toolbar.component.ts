import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../theme.service';
import { AsyncPipe } from '@angular/common';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { SidenavService } from '../services/side-nav.service';

@Component({
    selector: 'app-toolbar',
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        UserMenuComponent
    ],
    template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="toggleSidenav()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Demo App</span>
      <span style="flex: 1 1 auto;"></span>
      <button mat-icon-button (click)="toggleDarkMode()">
        <mat-icon>{{ themeService.isDarkMode() ? 'dark_mode' : 'light_mode' }}</mat-icon>
      </button>
      <app-user-menu></app-user-menu>
    </mat-toolbar>
  `,
    styles: [`
    mat-toolbar {
      position: fixed;
      top: 0;
      z-index: 1000;
    }
  `]
})
export class ToolbarComponent {
    public themeService = inject(ThemeService);
    private sidenavService = inject(SidenavService)

    toggleDarkMode() {
        this.themeService.toggleDarkMode();
    }

    toggleSidenav() {
        this.sidenavService.toggle();
    }
}