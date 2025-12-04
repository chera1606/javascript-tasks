/**
 * Bank Account Simulation
 * Description: A simple bank account with deposit and withdraw methods using closures.
 */

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance += amount;
      console.log("Deposited:", amount, "Current Balance", balance);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.log("Insufficient funds. Current Balance:", balance);
      } else {
        balance -= amount;
        console.log("Withdrew:", amount, "Current Balance:", balance);
      }
    },
  };
}
const myAccount = createBankAccount(100);
console.log(myAccount.deposit(700));
console.log(myAccount.withdraw(200));
