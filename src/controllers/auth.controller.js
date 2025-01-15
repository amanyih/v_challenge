import { User } from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async function (req, res) {
  try {
    const userFromBody = req.body;
    const { email } = userFromBody;
    const password = userFromBody.password;

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      ...userFromBody,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};
const signin = async function (req, res) {
  try {
    const userFromBody = req.body;
    const { email, password } = userFromBody;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ user_id: user._id, email }, "secret", {
      expiresIn: "12h",
    });

    return res.status(200).json({
      message: "Sucessful",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};

export { signin, signup };
