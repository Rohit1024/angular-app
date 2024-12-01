import { Component } from '@angular/core';
import { SidenavComponent } from '../navigation/side-navigation.component';
import { ToolbarComponent } from '../toolbar/app-toolbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ToolbarComponent, SidenavComponent],
  template: `
    <app-toolbar></app-toolbar>
    <app-sidenav>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </app-sidenav>
  `,
  styles: [`
    .content {
      padding: 80px 20px 20px;
      box-sizing: border-box;
    }
  `]
})
export class LayoutComponent {}