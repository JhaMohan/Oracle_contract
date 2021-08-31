Oracles is used to interact with data which is outside of blockchain.


As we can't call API from smart-contract , because smart-contract only use the data which is present inside blockchain.

How we gonna solve this problem?

We are going to reverse the data flow.

we gonna have an outside api that going to send transaction to a smart-contract in a blockchain and store outside data in the blockchain once the data inside the blockchain smart-contract going to use it.



steps:
 1. npm i
 2. truffle develop
 3. truffle migrate --reset
 4. open another terminal
 5. truffle exec scripts/price-watcher.js --network development
