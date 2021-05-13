export class UserProfile {
  private _ID: number;
  private _FIRST_NAME: string;
  private _LAST_NAME: string;
  private _ADDRESS: string;
  private _EMAIL: string;
  private _PHONE_NUMBER: string;
  private _OCCUPATION: string;
  private _USER_NAME: string;
  private _PASSWORD: string;


  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get FIRST_NAME(): string {
    return this._FIRST_NAME;
  }

  set FIRST_NAME(value: string) {
    this._FIRST_NAME = value;
  }

  get LAST_NAME(): string {
    return this._LAST_NAME;
  }

  set LAST_NAME(value: string) {
    this._LAST_NAME = value;
  }

  get ADDRESS(): string {
    return this._ADDRESS;
  }

  set ADDRESS(value: string) {
    this._ADDRESS = value;
  }

  get EMAIL(): string {
    return this._EMAIL;
  }

  set EMAIL(value: string) {
    this._EMAIL = value;
  }

  get PHONE_NUMBER(): string {
    return this._PHONE_NUMBER;
  }

  set PHONE_NUMBER(value: string) {
    this._PHONE_NUMBER = value;
  }

  get OCCUPATION(): string {
    return this._OCCUPATION;
  }

  set OCCUPATION(value: string) {
    this._OCCUPATION = value;
  }

  get USER_NAME(): string {
    return this._USER_NAME;
  }

  set USER_NAME(value: string) {
    this._USER_NAME = value;
  }

  get PASSWORD(): string {
    return this._PASSWORD;
  }

  set PASSWORD(value: string) {
    this._PASSWORD = value;
  }
}
