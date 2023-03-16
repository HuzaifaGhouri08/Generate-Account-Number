class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.accountNumber =
      'ACCT- ' + Math.random().toString(14).substr(2, 10).toUpperCase();
  }

  Display() {
    return `${this.name} (${this.accountNumber}): $${this.balance}`;
  }
}

const account1 = new Account('Huzaifa', 1000);
console.log(account1.Display());

const account2 = new Account('Mustufa', 5000);
console.log(account2.Display());
