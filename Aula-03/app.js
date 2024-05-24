import express from 'express';

const app = express();
app.use(express.json()); // Middleware

let listUsers = [];

app.get("/users", (request, response) => {
    response.status(200).json(listUsers);
});

app.post("/users", (request, response) => {
    const user = request.body;
    listUsers.push(user);

    response.status(201).json(user);
});

app.delete("/users/:id", (request, response) => {
    const { id } = request.params;

    const userToDelete = listUsers.find((user) => user.id === +id);

    if (!userToDelete) {
        response.status(404).json({ error: "User not found" });
        return;
    }

    listUsers = listUsers.filter((user) => user.id !== +id);

    response.status(204).end();
});

app.put("/users/:id", (request, response) => {
    // 1. Verificar se o usuário existe
    const { id } = request.params;

    const userToUpdate = listUsers.find((user) => user.id === +id);

    if (!userToUpdate) {
        response.status(404).json({ error: "User not found" });
        return;
    }

    // 2. Atualizar o usuário
    const newData = request.body;

    if (newData.name) {
        userToUpdate.name = newData.name;
    }

    if (newData.age) {
        userToUpdate.age = newData.age;
    }

    if (newData.married !== undefined && newData.married !== null) {
        userToUpdate.married = newData.married;
    }

    // 3. Retornar o usuário atualizado
    listUsers = listUsers.map((user) => {
        if (user.id === +id) {
            return userToUpdate;
        }

        return user;
    });

    response.status(200).json(userToUpdate);
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

// KOYHnjFyzsk2gLWO
// 189.47.52.231/32
// 0.0.0.0/0