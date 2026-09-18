const { Router } = require("express");

const authRouter = Router();

const authController = require("../controllers/auth.controller");

/**
 * @route       POST /api/auth/register
 * @description Register a new user
 * @access      Public
 */

authRouter.post(
    "/register",
    authController.registerUserController
);

/**
 * @route POST/api/auth/login
 * @description login user via email and pswrd
 * @access Publi
 */

authRouter.post("/api/login",authController.loginUserController)



/**
 * @route GET/api/auth/logout
 * @description clear token from user cookiie and add the token in blacklist
 * @accesss public
 *  
 * */ 


authRouter.get("/logout",authController.logoutUserController)

module.exports = authRouter;