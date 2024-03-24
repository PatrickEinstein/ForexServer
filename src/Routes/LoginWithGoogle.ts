import express from "express";
import passport from "passport";


const LoginWithGoogleRouter = express.Router();

const app = express();


LoginWithGoogleRouter.get(
  "/auth/login/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

LoginWithGoogleRouter.get(
  "/auth/login/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

LoginWithGoogleRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/api/docs",
    session: true,
  }),
  (req, res, next) => {
    console.log("Google called me back");
  }
);

LoginWithGoogleRouter.get("/auth/logout", (req, res) => {
  req.logout((done) => {
    console.log(done);
  });
  return res.redirect("/");
});
LoginWithGoogleRouter.get("/failure", (req, res) => {
  return res.send("failed to log in, try again later");
});

export default LoginWithGoogleRouter;
