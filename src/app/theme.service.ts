import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const THEME_KEY = 'app-theme-preference';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(this.getStoredThemePreference());
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private getStoredThemePreference(): boolean {
    const storedPreference = localStorage.getItem(THEME_KEY);
    return storedPreference ? JSON.parse(storedPreference) : false;
  }

  private initializeTheme(): void {
    if (this.darkMode.value) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  toggleDarkMode(): void {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);
    localStorage.setItem(THEME_KEY, JSON.stringify(newValue));
    
    if (newValue) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  isDarkMode(): boolean {
    return this.darkMode.value;
  }
}