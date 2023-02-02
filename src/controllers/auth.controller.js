const AuthService = require("../services/auth.service");
const CarService = require("../services/car.service");
const transporter = require("../utils/mailer");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await AuthService.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        to: result.email,
        from: "wolfgang.ra2@gmail.com",
        subject: "Email confirmation",
        html: "<h1>Welcome to my first ecommerce api with node created by me.</h1> <p>You have to confirm your email address</p><p>Just click on the following<a href='#' target='new_blank'>Link</a></p>",
      });
      const { id } = result;
      await CarService.add(id);
    } else {
      res.status(400).json({ message: "somethign wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email provided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not password provided",
      });
    }
    const result = await AuthService.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthService.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    next({ message: "Something wrong" });
  }
};

module.exports = {
  register,
  login,
};
