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
This is a sample code snippet that sample contract:
```js
const {Contract, VdsRPC} = require("vdsjs")
const rpc = new VdsRPC("/")
const contractInfo = require("./MilFold.json");
const milFold = new Contract(rpc, contractInfo);

//单参数
function getHistoryRoundInfo(args) {

  let callResult = milFold.call("getHistoryRoundInfo", args);//返回16进制数据
  callResult.then(data => {
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(data.outputs));
  });

  let funcArgs = [];
  funcArgs.push(args)

  let callParseData = milFold.callFunc("getHistoryRoundInfo", funcArgs);//返回10进制数据
  callParseData.then(data => {
    console.log(JSON.stringify(data));
  });
}
//多参数
function getPlayerRoundNums(...args) {

  let callArgs = [];
  callArgs.push(args[0][0])
  callArgs.push(args[1][0])

  let callResult = milFold.call("getPlayerRoundNums", callArgs);
  callResult.then(data => {
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(data.outputs));
  });

  let funcArgs = [];
  funcArgs.push(args[0])
  funcArgs.push(args[1])

  let callParseData = milFold.callFunc("getPlayerRoundNums", funcArgs);
  callParseData.then(data => {
    console.log(JSON.stringify(data));
  });
}

let chaindemo = {
  getHistoryRoundInfo: function (args) {
    getHistoryRoundInfo(args);
  },
  getPlayerRoundNums: function (...args) {
    getPlayerRoundNums(...args);
  }
};

export default chaindemo;

```
