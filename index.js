// Modify the following code to use closures and make the 'balance' variable private
function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      // Your code here: Add amount to the balance
      balance += amount;
      console.log(`Deposite Amount is ${amount}. New Balance is ${balance}`);
    },
    withdraw: function(amount) {
        // Your code here: Subtract amount from the balance if sufficient funds
        if (balance >= amount) {
            balance -= amount;
            console.log(`Withdrawn Amount is ${amount}. New Balance is ${balance}`);
        } else {
            console.log(`Insufficient funds. Withdrawl cancel`);
        }
    },
    getBalance: function() {
      // Your code here: Return the current balance
      console.log(`Current Balance is ${balance}`)
      return balance;
    }
  };
}

// Create an account with an initial balance of 100
let account = createAccount(100);

// Use the account methods to deposit, withdraw, and get balance
account.getBalance()
account.deposit(100)
account.withdraw(20)
account.getBalance()