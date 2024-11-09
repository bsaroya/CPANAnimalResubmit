const getAnimals = (req, res) => {
    res.json([{ id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3 }]);
};

const addAnimal = (req, res) => {
    const { name, breed, age, healthStatus } = req.body;
    res.status(201).json({ message: 'Animal profile created', animal: { name, breed, age, healthStatus } });
};

const updateAnimal = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Animal with ID ${id} updated` });
};

const deleteAnimal = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Animal with ID ${id} deleted` });
};

module.exports = { getAnimals, addAnimal, updateAnimal, deleteAnimal };
