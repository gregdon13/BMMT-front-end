interface Deserializable {
  deserialize(input: any): this;
}

export class Transaction implements Deserializable{
  private _ID: number;
  private _TRANSACTION_DATE: Date;
  private _ACCOUNT_ONE: number;
  private _ACCOUNT_TWO: number | undefined;
  private _TRANSACTION_TYPE: string;
  private _AMOUNT: number;
  private _USER_ID: number;

  // constructor(id: number, transactionDate: Date, accountOne: number, transactionType: string,
  //             amount: number, userId: number, accountTwo?: number) {
  //   this._ID = id;
  //   this._TRANSACTION_DATE = transactionDate;
  //   this._ACCOUNT_ONE = accountOne;
  //   this._ACCOUNT_TWO = accountTwo;
  //   this._TRANSACTION_TYPE = transactionType;
  //   this._AMOUNT = amount;
  //   this._USER_ID = userId;
  // }

  deserialize(input: any): this {
        return Object.assign(this, input);
    }


  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get TRANSACTION_DATE(): Date {
    return this._TRANSACTION_DATE;
  }

  set TRANSACTION_DATE(value: Date) {
    this._TRANSACTION_DATE = value;
  }

  get ACCOUNT_ONE(): number {
    return this._ACCOUNT_ONE;
  }

  set ACCOUNT_ONE(value: number) {
    this._ACCOUNT_ONE = value;
  }

  get ACCOUNT_TWO(): number | undefined {
    return this._ACCOUNT_TWO;
  }

  set ACCOUNT_TWO(value: number | undefined) {
    this._ACCOUNT_TWO = value;
  }

  get TRANSACTION_TYPE(): string {
    return this._TRANSACTION_TYPE;
  }

  set TRANSACTION_TYPE(value: string) {
    this._TRANSACTION_TYPE = value;
  }

  get AMOUNT(): number {
    return this._AMOUNT;
  }

  set AMOUNT(value: number) {
    this._AMOUNT = value;
  }

  get USER_ID(): number {
    return this._USER_ID;
  }

  set USER_ID(value: number) {
    this._USER_ID = value;
  }
}
