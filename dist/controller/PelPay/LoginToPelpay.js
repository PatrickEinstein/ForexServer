import dotenv from "dotenv";
dotenv.config();
const LoginToPelPayService = async () => {
    try {
        const getToken = await fetch("https://api.pelpay.ng/api/Account/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                clientId: "Nai0000319",
                clientSecret: "c33c1b0c-6160-4b18-a856-0c359006a75f",
            }),
        });
        if (!getToken.ok) {
            throw new Error(`Failed to fetch token from PelPay service: ${getToken.status}`);
        }
        const deliveredToken = await getToken.json();
        return deliveredToken;
    }
    catch (error) {
        console.error("Error fetching token:", error.message);
        return null; // Handle the error appropriately
    }
};
export default LoginToPelPayService;
