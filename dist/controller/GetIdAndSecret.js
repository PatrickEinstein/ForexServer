import UserModel from "../Models/User";
import { Decrypter } from "../Authority/Cryptography";
const GetIdAndSecret = async (email) => {
    const FoundUser = await UserModel.findOne({
        email,
    });
    try {
        if (FoundUser) {
            const ClientSecret = Decrypter(FoundUser.ClientSecret);
            const { ClientId } = FoundUser;
            return {
                status: true,
                ClientId,
                ClientSecret,
            };
        }
    }
    catch (err) {
        const { message } = err;
        return {
            status: false,
            error: message,
        };
    }
};
export default GetIdAndSecret;
