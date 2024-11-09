const express = require('express');
const { getAnimals, addAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAnimals);
router.post('/', authMiddleware, addAnimal);
router.put('/:id', authMiddleware, updateAnimal);
router.delete('/:id', authMiddleware, deleteAnimal);

module.exports = router;
