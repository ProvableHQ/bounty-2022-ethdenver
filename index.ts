import { Account } from "@aleohq/sdk";

const main = () => {
    let privateKey = "APrivateKey1zkpB5A1jLvjVHWjoCJkBqK2PmhoddZySASSQkY2nVdT4xhZ";
    console.log("Loading account from private key: ", privateKey)
    let account = Account.from_private_key(privateKey);
    console.log("View Key: ", account.to_view_key());
    console.log("Address: ", account.to_address());
};

main();