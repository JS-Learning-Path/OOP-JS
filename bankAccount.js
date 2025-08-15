class BanckAccount {
  #owner;
  #balance;
  constructor(owner, balance) {
    this.#owner = owner;
    this.#balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      throw new Error(`The amount of the deposit must be greater than 0`);
    }
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error(`Insufficient funds`);
    } else if (amount <= 0) {
      throw new Error(`Amount must be greater than 0`);
    } else {
      this.#balance -= amount;
    }
  }
  get balance() {
    return this.#balance;
  }
  get owner() {
    return this.#owner;
  }
}
const newAccount = new BanckAccount("Maria Petrova", 1000);
newAccount.deposit(200);
newAccount.withdraw(500);
console.log(newAccount.balance);
