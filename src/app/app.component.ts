import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent],
  template: `
  <app-layout>
    <h1>Welcome to {{ title }}!</h1>
    <p>This is a sample Angular Material application with dark mode support.</p>
  </app-layout>

  <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-app';
}
