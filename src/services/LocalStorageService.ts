/**
 * LocalStorage Service
 *
 *  To handle {setItem,getItem,removeItem} after validating the value.
 *
 *** NOTICE ***
 * use {localStorage} for web
 * use {AsyncStorage} for mobile
 * **************************************
 */
export class LocalStorageService {
  static data: any = [];

  static set = (field: string, value: string) => {
    LocalStorageService.data[field] = value;
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    return localStorage.setItem(field, value);
  };

  static setMultiple = (data: { [x: string]: any }) => {
    Object.keys(data).forEach(async (key) => {
      let value = data[key];
      await this.set(key, value);
    });
  };

  static get = (key: string) => {
    if (LocalStorageService.data[key] === undefined) {
      LocalStorageService.data[key] = localStorage.getItem(key);
    }

    return LocalStorageService.data[key];
  };

  static removeItem = (key: string) => {
    delete LocalStorageService.data[key];
    return localStorage.removeItem(key);
  };
}
