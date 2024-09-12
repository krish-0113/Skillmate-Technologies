import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/loginDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for users
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: 'Registration Successful' });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        res.json({
          message: 'Login Successfully',
          user: {
            id: user._id,
            email: user.email,
            name: user.name
          }
        });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
