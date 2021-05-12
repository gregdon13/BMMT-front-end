export class MoneyAccount {
  private _ID: number;
  ACCOUNT_TYPE: string;
  BALANCE: number;
  ACCOUNT_NUMBER: number;
  USER_ID: number;

  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get accountType(): string {
    return this.ACCOUNT_TYPE;
  }

  set accountType(value: string) {
    this.ACCOUNT_TYPE = value;
  }

  get balance(): number {
    return this.BALANCE;
  }

  set balance(value: number) {
    this.BALANCE = value;
  }

  get accountNumber(): number {
    return this.ACCOUNT_NUMBER;
  }

  set accountNumber(value: number) {
    this.ACCOUNT_NUMBER = value;
  }

  get userId(): number {
    return this.USER_ID;
  }

  set userId(value: number) {
    this.USER_ID = value;
  }
}
