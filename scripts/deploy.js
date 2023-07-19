// app.js
window.addEventListener('load', async () => {
    // Check if Web3 is injected by the browser (modern dapp browsers)
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Accounts now exposed
            initContract();
        } catch (error) {
            console.error("User denied account access or error occurred:", error);
        }
    }
    // Legacy dapp browsers
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Accounts always exposed
        initContract();
    }
    // Non-dapp browsers
    else {
        console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
});

const contractAddress = 'CONTRACT_ADDRESS'; // Replace with your contract address
const contractABI = [
    // Replace this with the actual ABI of your contract
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "mess",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "setMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let contract;

function initContract() {
    // Initialize the contract instance with the contract address and ABI
    contract = new web3.eth.Contract(contractABI, contractAddress);
    getMessage(); // Display the current message on page load
}

async function getMessage() {
    try {
        const currentMessage = await contract.methods.mess().call();
        document.getElementById('message').textContent = currentMessage;
    } catch (error) {
        console.error("Error occurred while getting the message:", error);
    }
}

async function setMessage() {
    const newMessage = document.getElementById('newMessage').value;
    try {
        await contract.methods.setMessage(newMessage).send({ from: web3.eth.defaultAccount });
        getMessage(); // Refresh the displayed message after setting it
    } catch (error) {
        console.error("Error occurred while setting the message:", error);
    }
}
