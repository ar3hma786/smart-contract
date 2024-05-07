const { ethers } = require("ethers");

const INFURA_ID = '';
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`);

const account1 = '';
const account2 = '';

const privateKey1 = '';
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1);
    const receiverBalanceBefore = await provider.getBalance(account2);

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`);
    console.log(`Receiver balance before: ${ethers.utils.formatEther(receiverBalanceBefore)}\n`);

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    });

    await tx.wait();
    console.log(tx);

    const senderBalanceAfter = await provider.getBalance(account1);
    const receiverBalanceAfter = await provider.getBalance(account2);

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`);
    console.log(`Receiver balance after: ${ethers.utils.formatEther(receiverBalanceAfter)}\n`);
}

main();
