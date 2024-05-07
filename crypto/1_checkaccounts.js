const { ethers } = require("ethers");

const INFURA_ID = '3f7e132fb714421aacf4579fa49cfd45'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

