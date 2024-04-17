import UserModel from "../Models/User.js";
export const ManuallyCreateUser = async (profile) => {
    //   console.log(`profile::`, profile);
    const { sub, given_name, family_name, picture, email } = profile;
    try {
        const userExist = await UserModel.findOne({ google_id: sub });
        if (userExist) {
            console.log(`useExistingUserGoogle`, userExist);
            return;
        }
        else {
            const createUserResponse = await fetch("http://localhost:5000/api/registerUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: given_name,
                    lastName: family_name,
                    age: 0,
                    DateOfBirth: "2024-01-01",
                    email: email,
                    password: "123456",
                    google_id: sub,
                }),
            });
            const newuser = await createUserResponse.json();
            console.log(`newUserCreated==>`, newuser);
        }
    }
    catch (error) {
        console.error("Error creating user:", error);
    }
};
