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

module.exports = authRouter;