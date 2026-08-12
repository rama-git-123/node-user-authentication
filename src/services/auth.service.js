const bcrypt = require("bcrypt");

const User = require("../models/user.model");

const registerUser = async (userData) => {
  const { name, email, age, gender, password } = userData;

  // 1. Check whether user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Create user
  const user = await User.create({
    name,
    email,
    age,
    gender,
    password: hashedPassword
  });

  // 4. Don't return password
  user.password = undefined;

  return user;
};

module.exports = {
  registerUser
};