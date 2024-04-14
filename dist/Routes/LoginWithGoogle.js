import express from "express";
import passport from "passport";
const LoginWithGoogleRouter = express.Router();
LoginWithGoogleRouter.get("/auth/login/google", passport.authenticate("google", {
    scope: ["email", "profile"],
}));
LoginWithGoogleRouter.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/dashboard",
    successRedirect: "http://localhost:3000/login",
    session: true,
}), (req, res, next) => {
    console.log("User Profile:", req.user);
    // res.redirect("http://localhost:3000/login");
});
LoginWithGoogleRouter.get("/auth/logout", (req, res) => {
    req.logout((done) => {
        console.log(done);
    });
    return res.redirect("http://localhost:3000/login");
});
export default LoginWithGoogleRouter;
