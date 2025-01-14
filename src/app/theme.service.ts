import { Injectable, computed, signal } from '@angular/core';

const THEME_KEY = 'app-theme-preference';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = signal<boolean>(this.getStoredThemePreference());
  darkModeComputed = computed(() => this.darkMode());

  constructor() {
    this.initializeTheme();
  }

  private getStoredThemePreference(): boolean {
    const storedPreference = localStorage.getItem(THEME_KEY);
    return storedPreference ? JSON.parse(storedPreference) : false;
  }

  private initializeTheme(): void {
    if (this.darkMode()) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  toggleDarkMode(): void {
    const newValue = !this.darkMode();
    this.darkMode.set(newValue);
    localStorage.setItem(THEME_KEY, JSON.stringify(newValue));
    
    if (newValue) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  isDarkMode(): boolean {
    return this.darkMode();
  }
}