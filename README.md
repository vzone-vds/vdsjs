The VDS JavaScript library for Smart Contract development.

# Install

```
npm install vdsjs
```

This is a sample code snippet that transfer ERC20 tokens:

```js
import { VdsRPC } from "vdsjs"

const repoData = require("./solar.json")
const vds = new Vds("http://vds:test@localhost:3889", repoData)

const myToken = vds.contract(
  "zeppelin-solidity/contracts/token/CappedToken.sol",
)

async function transfer(fromAddr, toAddr, amount) {
  const tx = await myToken.send("transfer", [toAddr, amount], {
    senderAddress: fromAddr,
  })

  console.log("transfer tx:", tx.txid)
  console.log(tx)

  await tx.confirm(3)
  console.log("transfer confirmed")
}
```

