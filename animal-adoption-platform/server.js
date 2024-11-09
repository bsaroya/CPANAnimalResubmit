const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const animalRoutes = require('./routes/animalRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 


app.use('/api/users', userRoutes);
app.use('/api/animals', animalRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Animal Adoption Platform');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
