# u-wallet-smart-contracts
UWallet Smart Contracts

This repository features a FundDistributor contract made to distribute funds in a permissioned way.
- The admin would add the user`s address to the contract while topping it with some ETH to refund the transaction costs.
- User would observe the UserHasBeenAdded event.
- User would then use the `withdraw(amount)` function to loan the money.
- After using the money, to give it back, user would use the `repay(amount)` function to repay the loan.
- After the specific time period in number of blocks(67280), the user will be able to loan again a bigger amount of money.
