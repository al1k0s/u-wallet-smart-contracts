const FundDistributor = artifacts.require("FundDistributor");
const BasicERC20 = artifacts.require("BasicERC20");

contract("FundDistributor", (accounts) => {
  it("should add the user`s account and top it with some ether", async () => {
    const fundDistributor = await FundDistributor.deployed();

    let userAccount = accounts[1];

    await fundDistributor.addAccount.call(userAccount);
    assert.require(userAccount.amount > 0);

    assert.equal(fundDistributor.hasParticipant(userAccount), true, "contract has no participant");
  });
//   it("should call a function that depends on a linked library", async () => {
//     const metaCoinInstance = await MetaCoin.deployed();
//     const metaCoinBalance = (
//       await metaCoinInstance.getBalance.call(accounts[0])
//     ).toNumber();
//     const metaCoinEthBalance = (
//       await metaCoinInstance.getBalanceInEth.call(accounts[0])
//     ).toNumber();

//     assert.equal(
//       metaCoinEthBalance,
//       2 * metaCoinBalance,
//       "Library function returned unexpected function, linkage may be broken"
//     );
//   });
//   it("should send coin correctly", async () => {
//     const metaCoinInstance = await MetaCoin.deployed();

//     // Setup 2 accounts.
//     const accountOne = accounts[0];
//     const accountTwo = accounts[1];

//     // Get initial balances of first and second account.
//     const accountOneStartingBalance = (
//       await metaCoinInstance.getBalance.call(accountOne)
//     ).toNumber();
//     const accountTwoStartingBalance = (
//       await metaCoinInstance.getBalance.call(accountTwo)
//     ).toNumber();

//     // Make transaction from first account to second.
//     const amount = 10;
//     await metaCoinInstance.sendCoin(accountTwo, amount, { from: accountOne });

//     // Get balances of first and second account after the transactions.
//     const accountOneEndingBalance = (
//       await metaCoinInstance.getBalance.call(accountOne)
//     ).toNumber();
//     const accountTwoEndingBalance = (
//       await metaCoinInstance.getBalance.call(accountTwo)
//     ).toNumber();

//     assert.equal(
//       accountOneEndingBalance,
//       accountOneStartingBalance - amount,
//       "Amount wasn't correctly taken from the sender"
//     );
//     assert.equal(
//       accountTwoEndingBalance,
//       accountTwoStartingBalance + amount,
//       "Amount wasn't correctly sent to the receiver"
//     );
//   });
});
