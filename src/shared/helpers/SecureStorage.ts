import * as SecureStorage from 'expo-secure-store';
import ErrorLoger from './ErrorLoger';
async function setItem(key: string, value: any): Promise<void> {
  try {
    if (typeof value === 'string' || value instanceof String) {
      await SecureStorage.setItemAsync(key, value as string);
      return;
    }
    await SecureStorage.setItemAsync(key, JSON.stringify(value));
  } catch (error: any) {
    ErrorLoger.log(`SecureStorage.setItem => ${key}: ${value}`);
    throw error;
  }
}

async function getItem(key: string): Promise<string> {
  try {
    const result = await SecureStorage.getItemAsync(key);
    return result || '';
  } catch (error: any) {
    ErrorLoger.log(`SecureStorage.getItem: ${key}`);
    throw error;
  }
}

async function removeItem(key: string): Promise<void> {
  try {
    await SecureStorage.deleteItemAsync(key);
  } catch (error: any) {
    ErrorLoger.log(`SecureStorage.getItem: ${key}`);
    throw error;
  }
}

export default {
  setItem,
  getItem,
  removeItem,
};
