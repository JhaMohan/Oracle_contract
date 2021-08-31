const oracle = artifacts.require("Oracle.sol");
const consumer = artifacts.require("Consumer.sol");

module.exports = async function (deployer,_network,accounts) {
const [admin,reporter,_] = accounts;
await deployer.deploy(oracle,admin);
const oracleAddress = await  oracle.deployed();
await oracleAddress.updateReporter(reporter,true);
await deployer.deploy(consumer, oracleAddress.address);
};
