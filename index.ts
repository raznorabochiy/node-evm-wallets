import { Wallet } from "ethers";

const MAX = 10;

for (let i = 0; i < MAX; i++) {
  const wallet = Wallet.createRandom();
  const { address, mnemonic, privateKey } = wallet;

  console.log(`address: ${address}`);
  console.log(`mnemonic: ${mnemonic.phrase}`);
  console.log(`private key: ${privateKey}`);
  console.log("-------------");
}
