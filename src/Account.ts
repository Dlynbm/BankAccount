import {AccountType} from "./Enums/AccountType";
import {TransactionOrigin} from "./Enums/TransactionOrigin";
import {Transaction} from "./Transaction";


export interface Account {
    accountHolderName: string;
    accountBirthDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountType: AccountType;
    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction;
    depositMoney(amount: number,
                 description: string):
                 Transaction;



}






