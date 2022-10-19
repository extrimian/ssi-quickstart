import * as fsAsync from 'fs/promises';
import * as fs from 'fs';
import { KMSStorage } from '@extrimian/kms-core';

class DidStorage implements KMSStorage {
  constructor() {
    const map = this.readMap();
    this.map = map || new Map();
  }

  private readonly map: Map<string, string>;

  private readMap(): Map<string, string> {
    try {
      const mapFromFile = fs.readFileSync('didStorage').toString();
      return JSON.parse(mapFromFile, (key, value): Map<string, string> => {
        if (typeof value === 'object' && value !== null) {
          if (value.dataType === 'Map') {
            return new Map(value.value);
          }
        }
        return value;
      });
    } catch (error) {
      return undefined;
    }
  }

  private async saveMap(): Promise<void> {
    const serializedMap = JSON.stringify(this.map, (key, value) => {
      if (value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries()),
        };
      }
      return value;
    });
    await fsAsync.writeFile('didStorage', serializedMap, { flag: 'w' });
  }

  async add(key: string, data: any): Promise<void> {
    this.map.set(key, data);
    await this.saveMap();
  }

  async get(key: string): Promise<any> {
    return this.map.get(key);
  }

  async getAll(): Promise<Map<string, any>> {
    return this.map;
  }

  async remove(key: string): Promise<void> {
    this.map.delete(key);
    await this.saveMap();
  }

  async update(key: string, data: any): Promise<void> {
    this.map.set(key, data);
    await this.saveMap();
  }

  async getDid(): Promise<string> {
    return this.map.get('did');
  }

  async saveDid(did: string): Promise<void> {
    this.map.set('did', did);
    await this.saveMap();
  }
}

export const didStorage = new DidStorage();
