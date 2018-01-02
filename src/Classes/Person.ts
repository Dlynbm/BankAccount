import {CheckingAccount} from "./CheckingAccount";
import {SavingsAccount} from "./SavingsAccount";
import {RetirementAccount} from "./RetirementAccount";
import {AccountType} from "../Enums/AccountType";

export class Person {
    checking = new CheckingAccount(this.name, this.dateOfBirth, this.checkingBalance, AccountType.checking);

    savings = new SavingsAccount(this.name, this.dateOfBirth, this.savingsBalance, AccountType.savings);

    retirement = new RetirementAccount(this.name, this.dateOfBirth, this.retirementBalance, AccountType.retirement);

    constructor(name: string,
                dateOfBirth: Date,
                checkingBalance: number,
                savingsBalance: number,
                retirementBalance: number) {
    }
}

