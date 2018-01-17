import {AccountType} from '../Enums/AccountType';
import {Transaction} from "../Transaction";
import {Account} from '../Account';
import {TransactionOrigin} from "../Enums/TransactionOrigin";
import {displayClassName, displayClassNameWithPurpose} from "../Decorators";

@displayClassName



export class CheckingAccount implements Account, Transaction {

    constructor(){
        this.dateOpened = new Date();
    }

    dateOpened: Date;
    errorMessage:string;
    transactionDate: Date;
    description: string;
    amount: number;
    success: boolean;
    resultBalance: number;
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 1000;
    accountType: AccountType;
    accountHistory: Transaction[];


    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction {
        let currentBalance = this.balance;
        this.accountType = 1;
        if (transactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone || TransactionOrigin.web) {
            this.amount = amount;

            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot withdrawl more than the available balance.";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
            }

            return;
        }
    }
        depositMoney(amount: number, description: string): Transaction {
            this.balance += amount;
            this.resultBalance =this.balance;
            this.success = true;
            this.description = description;
            this.errorMessage="";
            this.transactionDate = new Date();

            return;
        }
    }


