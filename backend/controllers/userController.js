const User = require("../models/User");


exports.createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, Email and Password are required",
      });
    }

    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "User registered",
      data: user
    });

    console.log("BODY:", req.body);

  } catch (error) {
    console.log("ERROR 👉", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid user id"
      });
    }

    res.json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getallUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({
        message: "No users found",
      });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
