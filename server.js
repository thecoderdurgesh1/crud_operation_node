// server.js
const express = require("express");
const bodyParser = require("body-parser");
const {
	createUser,
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require("./user"); // Importing CRUD functions from user.js

const app = express();
app.use(bodyParser.json());

// Route: Create a new user
app.post("/users", (req, res) => {
	const { name, email } = req.body;
	const newUser = createUser(name, email);
	res.status(201).json(newUser);
});

// Route: Get all users
app.get("/users", (req, res) => {
	res.json(getUsers());
});

// Route: Get a user by ID
app.get("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const user = getUserById(userId);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: "User not found" });
	}
});

// Route: Update a user by ID
app.put("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const updatedData = req.body;
	const updatedUser = updateUser(userId, updatedData);
	if (updatedUser) {
		res.json(updatedUser);
	} else {
		res.status(404).json({ message: "User not found" });
	}
});

// Route: Delete a user by ID
app.delete("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const success = deleteUser(userId);
	if (success) {
		res.json({ message: "User deleted successfully" });
	} else {
		res.status(404).json({ message: "User not found" });
	}
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
