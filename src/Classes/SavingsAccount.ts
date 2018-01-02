import {AccountType} from '../Enums/AccountType';
import {Transaction} from "../Transaction";
import {Account} from '../Account';
import {TransactionOrigin} from "../Enums/TransactionOrigin";
import {displayClassName, displayClassNameWithPurpose} from "../Decorators";


export class SavingsAccount implements Account {
    displayName: string;
    id: string;
    imageURL?: string;
    name?: string;
    rpDisplayName: string;
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory: Transaction[];

    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction {
        throw new Error("Method not implemented.");
    }
    depositMoney(amount: number,
                 description: string): Transaction {
        throw new Error("Method not implemented.");
    }
    advanceDate(numberOfDays: number) {
        throw new Error("Method not implemented.");
    }
}