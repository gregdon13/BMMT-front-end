interface Deserializable {
  deserialize(input: any): this;
}

export class MoneyAccount implements Deserializable {
  private _ID: number;
  private _ACCOUNT_TYPE: string;
  private _BALANCE: number;
  private _ACCOUNT_NUMBER: number;
  private _USER_ID: number;

  // constructor(id: number, accountType: string, balance: number, accountNumber: number, userId: number) {
  //   this._ID = id;
  //   this._ACCOUNT_TYPE = accountType;
  //   this._BALANCE = balance;
  //   this._ACCOUNT_NUMBER = accountNumber;
  //   this._USER_ID = userId;
  // }


  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get ACCOUNT_TYPE(): string {
    return this._ACCOUNT_TYPE;
  }

  set ACCOUNT_TYPE(value: string) {
    this._ACCOUNT_TYPE = value;
  }

  get BALANCE(): number {
    return this._BALANCE;
  }

  set BALANCE(value: number) {
    this._BALANCE = value;
  }

  get ACCOUNT_NUMBER(): number {
    return this._ACCOUNT_NUMBER;
  }

  set ACCOUNT_NUMBER(value: number) {
    this._ACCOUNT_NUMBER = value;
  }

  get USER_ID(): number {
    return this._USER_ID;
  }

  set USER_ID(value: number) {
    this._USER_ID = value;
  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
