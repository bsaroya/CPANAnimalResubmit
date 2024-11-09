const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = (req, res) => {
    const { name, email, password, role } = req.body;
    
    const hashedPassword = bcrypt.hashSync(password, 10);
    const token = jwt.sign({ name, email, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered', token });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'User logged in', token });
};

module.exports = { registerUser, loginUser };
