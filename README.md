# Overview
This repository contains information, resources, and examples for the Aleo bounties at EthDenver 2022 hackathon.

## Bounty 1 - Aleo Wallet Generation

### Description

We encourage you to create an open-source Aleo address generator leveraging the Aleo SDK. It should be able to generate a new Aleo private key and derive the corresponding Aleo view key and Aleo address. 

We expect the team to build a complete application that can be viewed as one or more of the following: webapp, desktop app, mobile app, or browser extension. 

A vanity address generation tool would be a nice feature to make your work stand out. We would love for the bounty winner to evolve into a real public application funded by the Aleo grants program. 

### Prize Amount 
$7,500 (In-Person)  1st place - $5,000 | 2nd place - $2,500 

### Resources:

**Recommended NodeJS version >14**

Install and run the Aleo SDK boilerplate code in this repository

```bash
yarn install
yarn start
```

Check out the provided Aleo SDK for information

[https://github.com/aleohq/aleo](https://github.com/aleohq/aleo)

[https://aleohq.github.io/aleo/](https://aleohq.github.io/aleo/)

### Requirements

## Bounty 2 - Analytics Tools for Aleo Nodes 

### Description 

We encourage you to build an open-source tool that helps analyze data relating to the Aleo blockchain. This can include network data, blockchain data, and/or account data. This bounty is open-ended and we’re looking for creative solutions. 

It is recommended to use the snarkOS RPC methods for this bounty. We also have endpoints from the Aleo postman collection that you can use.

An example of such a tool would be an account indexer that scans the Aleo blockchain for records associated with an address and its corresponding view key. 

### Prize Amount
$7,500 (Virtual) | 1st place - $5,000 | 2nd place - $2,500

### Resources
Check out the provided snarkOS RPC Docs

[https://github.com/AleoHQ/snarkOS/tree/testnet2/src/rpc/documentation/public_endpoints](https://github.com/AleoHQ/snarkOS/tree/testnet2/src/rpc/documentation/public_endpoints)

Postman Collection

You can import the current SnarkOS rpc endpoints into [Postman](https://www.postman.com/) with this file
https://github.com/AleoHQ/bounty-2022-ethdenver/blob/main/testnet2-rpc-endpoints.postman_collection.json

Sync Nodes

A list of Aleo-owned sync node ip addresses can be found here https://github.com/AleoHQ/snarkOS/blob/667aa476d9bb0e18a78f23e6efe2c953ed93c906/src/environment/mod.rs#L188

Aleo Explorer

Browse the current test network

https://www.aleo.network/

