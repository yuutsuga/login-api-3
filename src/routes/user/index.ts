import prisma from "../../database";
import "dotenv/config";
import { Router } from "express";

const route = Router();

// route to get all users
route.get('/users', async (req, res) => {
    const users = await prisma.user.findMany({ });

    res.status(200).send({ users });
});

// route to get a user by id
route.get('/users/:id', async (req, res) => {
    const { userId }: any = req.params;

    if (!userId) {
        return res.status(404).send('cannot find user');
    }

    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    });

    res.status(200).send({ user });
});


// route to create user
route.post('/users/create', async (req, res) => {
    const { name, username } = req.body;

    if (!name || !username) {
        return res.status(401).send('missing fields');
    }

    const user = await prisma.user.create({
        data: {
            name, 
            username
        }
    });

    res.status(200).send({ user });
});

// route to edit user
route.put('/user/:id', async (req, res) => {
    const { userId }: any = req.params;

    if (!userId) {
        return res.status(404).send('user not found');
    }

    const editUser = await prisma.user.update({
        where: {
            id: userId
        },
        data: { }
    });

    res.status(200).send({ editUser });
});

// route to delete user 
route.delete('/users/:id', async (req, res) => {
    const { userId }: any = req.params;

    if (!userId) {
        return res.status(404).send('user not found');
    }

    const deleteUser = await prisma.user.delete({
        where: {
            id: userId
        }
    });

    if (!deleteUser) {
        return res.status(401).send({ deleted: false });
    }

    res.status(200).send({ deleted: true });
});

export default route;