import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// const TokenVerification = (): RequestHandler => {
//   return (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, process.env.JSONKEY as string, (err:any, decoded:any) => {
//       if (err) {
//         return res.status(401).json({ message: "Token expired or invalid" });
//       }
//       req.user = decoded;
//       console.log(decoded);
//       next();
//     });
//   };
// };
const TokenVerification = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
        // return next();
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JSONKEY, (err, decoded) => {
        if (err) {
            return next();
        }
        req.user = decoded;
        // console.log(decoded);
        next();
    });
};
export const checkLoggedIn = (req, res, next) => {
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            message: "You must be logged in by Google or mail",
        });
    }
    return next();
};
export const AuthMiddleWare = (req, res, next) => {
    TokenVerification(req, res, () => {
        checkLoggedIn(req, res, next);
    });
};
export default TokenVerification;
