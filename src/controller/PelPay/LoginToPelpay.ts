

const LoginToPelPayService = async () => {
  const getToken = await fetch(`${process.env.Payment_Base_Url}/Account`, {
    method: "POST",
    body: JSON.stringify({
      clientId: "Nai0000319",
      clientSecret: "c33c1b0c-6160-4b18-a856-0c359006a75f",
    }),
  });

  const deliveredToken = await getToken.json();
  return deliveredToken.access_token;
};

export default LoginToPelPayService