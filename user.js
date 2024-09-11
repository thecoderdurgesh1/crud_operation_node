// user.js
let users = [];

// Create a new user
function createUser(name, email) {
	const newUser = {
		id: users.length + 1, // simple auto-incremented ID
		name: name,
		email: email,
	};
	users.push(newUser);
	return newUser;
}

// Get all users
function getUsers() {
	return users;
}

// Get a single user by ID
function getUserById(id) {
	return users.find((user) => user.id === id);
}

// Update a user by ID
function updateUser(id, updatedData) {
	const user = users.find((user) => user.id === id);
	if (user) {
		user.name = updatedData.name || user.name;
		user.email = updatedData.email || user.email;
		return user;
	}
	return null;
}

// Delete a user by ID
function deleteUser(id) {
	const index = users.findIndex((user) => user.id === id);
	if (index !== -1) {
		users.splice(index, 1);
		return true;
	}
	return false;
}

// Export CRUD functions for use in server.js
module.exports = {
	createUser,
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
};
