import User from '../models/User.js';
import { checkValidationErrors } from '../utils/index.js';

const register = async (req, res) => {
  try {
    const { email } = req.body;

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({ error: 'The Email is already exist!' });
    }

    const newUser = await User.create(req.body);

    newUser.password = undefined;

    return res
      .status(201)
      .json({ message: 'User created succesfully', user: newUser });
  } catch (error) {
    // Handle mongoose validation error
    if (error.name === 'ValidationError') {
      if (checkValidationErrors(error, res)) return;
    } else {
      console.error('Error at register', error);
      return res.status(500).json({ error: 'Internal Server error' });
    }
  }
};

export { register };
