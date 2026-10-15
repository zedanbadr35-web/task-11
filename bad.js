// 1- B
// 2- A
// 3- D
// 4- D
// 5- B
// 6- A
// 7- A
// 8- A
// 9- D


class UserManager {
    constructor() {
        this.users = [];
        this.idCounter = 1;
    }

    createUser(username, password) {
        const existingUser = this.users.find(u => u.username === username);
        if (existingUser) {
            return { success: false, message: "Username already exists!" };
        }

        const newUser = {
            id: this.idCounter++,
            username,
            password
        };

        this.users.push(newUser);
        return { success: true, user: { id: newUser.id, username: newUser.username } };
    }

    getUsers() {
        return this.users.map(({ id, username }) => ({ id, username }));
    }

    getUserById(id) {
        const user = this.users.find(u => u.id === id);
        if (!user) return null;
        return { id: user.id, username: user.username };
    }

    updateUser(id, newUsername, newPassword) {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            return { success: false, message: "User not found!" };
        }

        if (newUsername) user.username = newUsername;
        if (newPassword) user.password = newPassword;

        return { success: true, user: { id: user.id, username: user.username } };
    }

    deleteUser(id) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) {
            return { success: false, message: "User not found!" };
        }

        const deletedUser = this.users.splice(index, 1);
        return { success: true, message: `User ${deletedUser[0].username} deleted successfully.` };
    }
}

const manager = new UserManager();

manager.createUser("badr", "123456");
manager.getUsers();
manager.updateUser(1, "badr_ahmed", "newpassword");
manager.deleteUser(1);

