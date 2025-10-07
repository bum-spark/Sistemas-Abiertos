import { Injectable, Inject, PLATFORM_ID, signal, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  setItem(key: string, value: any): void {
    if (this.isBrowser) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error('Error guardando en localStorage', e);
      }
    }
  }

  getItem(key: string): any {
    if (this.isBrowser) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (e) {
        console.error('Error recuperando de localStorage', e);
        return null;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        console.error('Error eliminando de localStorage', e);
      }
    }
  }

  clear(): void {
    if (this.isBrowser) {
      try {
        localStorage.clear();
      } catch (e) {
        console.error('Error al limpiar el localStorage', e);
      }
    }
  }

  createPersistentSignal<T>(key: string, defaultValue: T) {
    // Cargar valor inicial del localStorage o usar el default
    const initialValue = this.getItem(key) ?? defaultValue;
    const persistentSignal = signal<T>(initialValue);

    // Usar effect para sincronizar automáticamente con localStorage
    effect(() => {
      this.setItem(key, persistentSignal());
    });

    return persistentSignal;
  }
}