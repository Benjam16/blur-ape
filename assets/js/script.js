
$("#NotConnected").show();
$("#Connected").removeAttr("style").hide();
$("#isRevealNotConnected").show();
$("#isRevealConnected").removeAttr("style").hide();
const addPlus = async() => {
    var value=$('#quantity').val();
    if(value==""){
      $('#quantity').val(1);
    }else{
      var finalValue=parseInt(value)+1>20?20:parseInt(value)+1;
      $('#quantity').val(finalValue);
    }
  }
  
const addMinus = async() => {
    var value=$('#quantity').val();
    if(value==""){
      $('#quantity').val(1);
    }else{
      var finalValue=parseInt(value)-1<1?1:parseInt(value)-1;
      $('#quantity').val(finalValue);
    }
  }

function CheckValue() {
	var value=$('#quantity').val();
	if(value >= 20)
	{
		$('#quantity').val(20);
	}
	else if(value <= 0)
	{
		$('#quantity').val(1);
	}
}
const ContractAddress = "0x461ebd16c01556b40007f311c4415cdbaf7e91b9";
const ContractABI = () => {
	return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "FreeMintBatch", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Minting", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty", "type": "uint256" } ], "name": "OwnerBatchMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" } ], "name": "RevealToken", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_newOwner", "type": "address" } ], "name": "_setKey", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "listedAirdrop", "type": "address[]" }, { "internalType": "uint256[]", "name": "qty", "type": "uint256[]" } ], "name": "airdrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURIReveal", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURIUnrevealed", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "freeMintArray", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes", "name": "_signature", "type": "bytes" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "isMessageValid", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxPerTx", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "minted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextOwnerToExplicitlySet", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "reveal", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "revealUrl", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "baseURIReveal_", "type": "string" }, { "internalType": "string", "name": "baseURIUnrevealed_", "type": "string" } ], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxMint_", "type": "uint256" } ], "name": "setMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPublicMinting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "freeMintArray_", "type": "uint256[]" } ], "name": "setfreeMintArray", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "supplyMintArray_", "type": "uint256[]" } ], "name": "setsupplyMintArray", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "supplyMintArray", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "tokenOfOwnerByArray", "outputs": [ { "internalType": "uint256[]", "name": "token", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]`;  
};
	
document.addEventListener("DOMContentLoaded", checkMetamask);

var tokenArray = [];
var tokenID = 0;
const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const Contract = new ethers.Contract(ContractAddress, ContractABI(), signer);
var connectedWallet = false;

const connect = async()=>{
	await provider.send("eth_requestAccounts", []);
	try {
		return await provider.send("eth_requestAccounts", []);
	}    
	catch (error) { 
			if (error) {
				if ((error.message).includes("User rejected the request")) {
						swal("Check Your Metamask!");
				}
				else{
						swal("Clear Browser Cookies and Cache");
					}
			}
			else {
				swal("Clear Browser Cookies and Cache");
			}
		}
};


function  checkMetamask (){
	if (typeof window.ethereum !== 'undefined') {
	}
	else{
		$("#isDisconnect").show();
		$("#isConnect").removeAttr("style").hide();
	}
};

const getAddress = async()=>{
	try {
		return await signer.getAddress()
	}catch (error) { 
        if (error) {
				connectedWallet = false;
			}
        else {
			
        }
    } finally {
		if(getAddress != null)
		{
			connectedWallet = true;
		}
	}
};

const updateMintInfo = async() => {
	await connect();
	const minted = parseInt(await Contract.totalSupply());
	const free = parseInt(await Contract.FreeMintBatch());
	let userAddress = await getAddress();
	let length = userAddress.length;
    $("#minted").html(`${minted}`+"/10000 Supply");
    $("#freeMint").html(`${free}`);
    $("#connectWallet").html(`Wallet :`+`${userAddress.substr(0,4)}.`+`.${userAddress.substr((length-4),length)}`);
    $("#Connected").show();
	$("#NotConnected").removeAttr("style").hide();
	$("#isRevealConnected").show();
	$("#isRevealNotConnected").removeAttr("style").hide();
}
setInterval(async()=>{
	const addresses = await provider.listAccounts(); 
	if(addresses.length != 0)
	{
		await updateMintInfo();
	}
}, 5000)
ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
	const addresses = await provider.listAccounts(); 
	if(addresses.length != 0)
	{
		await updateMintInfo();
	}
	else
	{
		$("#NotConnected").show();
		$("#Connected").removeAttr("style").hide();
	}
};

const mint = async() => {
    try {
			await connect();
			let userAddress = await getAddress();
			const priceWei = parseInt(await Contract.price());
			const walletMint = parseInt(await Contract.minted(userAddress));
			const free = parseInt(await Contract.FreeMintBatch());
			let  amount = parseInt($("#quantity").val());
			if(walletMint < free)
			{
				if(amount <= free - walletMint){amount = free};
				const cost = ethers.BigNumber.from(priceWei).mul(amount-free);
				const gasLimit = await Contract.estimateGas.mint(amount, {value: cost});
				const newGasLimit = parseInt((gasLimit * 1.2)).toString();
				await Contract.mint(amount, {value: cost,gasLimit: newGasLimit});
			}
			else
			{
				const cost = ethers.BigNumber.from(priceWei).mul(amount);
				const gasLimit = await Contract.estimateGas.mint(amount, {value: cost});
				const newGasLimit = parseInt((gasLimit * 1.2)).toString();
				await Contract.mint(amount, {value: cost,gasLimit: newGasLimit});
			}
		}
    catch (error) { 
		if (error) {
			console.log(error);
			if ((error.message).includes("Blur Ape YC Minting Pause !")) {
					swal("Minting Pause");
			}
			else if ((error.message).includes("Blur Ape YC Limit Per Tx !")) {
					swal("Limit Per Tx");
			}	
			else if ((error.message).includes("Blur Ape YC Soldout !")) {
					swal("Soldout");
			}			
			else if ((error.message).includes("Blur Ape YC Insufficient Funds !")) {
					swal("Insufficient Funds");
			}	
			else if ((error.message).includes("wallet_requestPermissions")) {
					swal("Check Your Popup Metamask");
			}
			else if ((error.message).includes("insufficient funds")) {
					swal("Insufficient Funds");
			}
			else if ((error.message).includes("User rejected the request.")) {
					swal("Rejected");
			}
			else{
					swal("Clear Browser Cookies and Cache");
			}
		}
		else {
			swal("Clear Browser Cookies and Cache");
		}
	}
};
function hasOwnPropertyCaseInsensitive(obj, property) {
    var props = [];
    for (var i in obj) if (obj.hasOwnProperty(i)) props.push(i);
    var prop;
    while (prop = props.pop()) if (prop.toLowerCase() === property.toLowerCase()) return true;
    return false;
}
const checkWhitelist = async()=>{
	let userAddress = await getAddress();
	console.log(tokenID.toString());
	const _signature = await fetch("assets/js/signature.json").then(response => response.json()).then(json => {
		if (hasOwnPropertyCaseInsensitive(json,tokenID.toString())){
			var asLowercase = tokenID.toString().toLowerCase();
			var signature = json[Object.keys(json).find(key => key.toLowerCase() === asLowercase)]['signature'];
			var result = JSON.stringify(signature);
			return result;
		}
		else{
			return null;
		}
	});    
	try {
        const _result = _signature ? JSON.parse(_signature) : [];
        return _result
    }
    catch (error) {
        return [];
    }
};
const reveal = async() => {
    try {
			await connect();
			let userAddress = await getAddress();
			tokenID = parseInt($("#tokenId").val());
			console.log(tokenID);
			var _signature = await checkWhitelist(tokenID);
			console.log(_signature);
			const gasLimit = await Contract.estimateGas.RevealToken(tokenID,_signature);
			const newGasLimit = parseInt((gasLimit * 1.05)).toString();
			await Contract.RevealToken(tokenID,_signature, {gasLimit: newGasLimit});
		}
    catch (error) { 
		if (error) {
			console.log(error);
			if ((error.message).includes("Blur Ape YC Not Owner!")) {
					swal("Not Owner!");
			}
			else if ((error.message).includes("Blur Ape YC Wrong Signature!")) {
					swal("Wrong Signature!");
			}	
			else if ((error.message).includes("wallet_requestPermissions")) {
					swal("Check Your Popup Metamask");
			}
			else if ((error.message).includes("User rejected the request.")) {
					swal("Rejected");
			}
			else{
					swal("Clear Browser Cookies and Cache");
			}
		}
		else {
			swal("Clear Browser Cookies and Cache");
		}
	}
};
var indexNow = 0;
const Previous = async() => {
	if(indexNow == 0)return;
	if(tokenArray.length <= 0)
	{
		let userAddress = await getAddress();
		tokenid = await Contract.tokenOfOwnerByIndex(userAddress,indexNow);
	}
    var value=$('#tokenId').val();
	indexNow--;
	$('#tokenId').val(tokenid);
	console.log(tokenid);
  }
  
const Next = async() => {
	if(indexNow == tokenArray.length-1)return;
	if(tokenArray.length <= 0)
	{
		let userAddress = await getAddress();
		tokenid = await Contract.tokenOfOwnerByIndex(userAddress,indexNow);
	}
    var value=$('#tokenId').val();
	indexNow++;
	$('#tokenId').val(tokenid);
	console.log(tokenid);
  }