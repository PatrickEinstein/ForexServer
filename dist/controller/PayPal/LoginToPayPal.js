const getTokenPayPal = async () => {
    const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString('base64');
    const requestBody = new URLSearchParams({
        grant_type: 'client_credentials'
    });
    try {
        const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: requestBody
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.access_token;
    }
    catch (error) {
        console.error('Error:', error);
        return null;
    }
};
getTokenPayPal()
    .then(token => {
    console.log('Access token:', token);
})
    .catch(error => {
    console.error('Error:', error);
});
export default getTokenPayPal;
