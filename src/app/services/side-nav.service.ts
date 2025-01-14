import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isOpen = signal<boolean>(true);
  isOpenComputed = computed(() => this.isOpen());

  toggle() {
    this.isOpen.update(() => !this.isOpen())
  }
}