# METACRAFTERS

## Smart Contract Integration with Frontend
This project demonstrates the integration of a smart contract with a frontend application using Ethereum, React, and Hardhat.

## Smart Contract
The smart contract used in this project is Assessment.sol. It is a simple contract that allows you to set and fetch a naming message.

## Frontend
The frontend application is built using React and interacts with the deployed smart contract. 
The main functionality of the frontend includes fetching the current naming and setting a new naming message.

## Prerequisites
Node.js

MetaMask extension for your browser

## Getting Started
Clone the repository:
**git clone**

### Install the dependencies:
**cd npm install**

### Start a local Ethereum network:
**npx hardhat node**

This command starts a local Ethereum network using Hardhat. Make sure to note the network URL and use it to configure MetaMask in the next step.

### Configure MetaMask:
1. Install the MetaMask extension for your browser. Create an Ethereum network in MetaMask and set the network URL to connect to your local Hardhat network. 
2. Import an account from your local Hardhat network into MetaMask. .
3. Deploy the Smart Contract:

To deploy the Assessment smart contract to your local network, run the following command in your project directory:

**npx hardhat run scripts/deploy.js --network localhost**

Make sure the local Ethereum network is running before deploying the contract.

### Update the Frontend Configuration:
In the index.js file, update the nameAddress variable with the deployed contract address obtained from the deployment step.

#Start the Frontend Development Server:

**npm run dev**

Open your browser and navigate to http://localhost:3000 to access the frontend application.

## Usage
The main page of the frontend application displays the current naming fetched from the smart contract.
To update the naming, enter a new message in the input field and click the "Set naming" button. Make sure to have funds in the MetaMask account connected to the local Ethereum network.
The updated naming will be stored on the blockchain, and the page will display the new naming.

## Resources
1. Ethereum
2. React
3. Hardhat
4. MetaMask

## Authors
ex. Mayank Varshney (21BCS7009)

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/21BCS7009/Module-Smart-Contract-Management---ETH-AVAX/blob/main/LICENSE) file for details.
