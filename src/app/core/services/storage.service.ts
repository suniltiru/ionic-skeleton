import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private _isInitialized = false; // To track initialization state

  constructor(private storage: Storage) {}

  /**
   * Initialize the storage instance (if not already initialized)
   */
  async init(): Promise<void> {
    if (!this._isInitialized) {
      this._storage = await this.storage.create();
      this._isInitialized = true; // Mark as initialized
    }
  }

  /**
   * Set a key-value pair in storage
   * @param key - The storage key
   * @param value - The value to store
   */
  async set<T>(key: string, value: T): Promise<void> {
    await this.init(); // Ensure storage is initialized
    await this._storage?.set(key, value);
  }

  /**
   * Get a value from storage
   * @param key - The storage key
   * @returns The value associated with the key
   */
  async get<T>(key: string): Promise<T | null> {
    await this.init(); // Ensure storage is initialized
    return this._storage?.get(key) ?? null;
  }

  /**
   * Remove a key-value pair from storage
   * @param key - The storage key
   */
  async remove(key: string): Promise<void> {
    await this.init(); // Ensure storage is initialized
    await this._storage?.remove(key);
  }

  /**
   * Clear all storage
   */
  async clear(): Promise<void> {
    await this.init(); // Ensure storage is initialized
    await this._storage?.clear();
  }
}
