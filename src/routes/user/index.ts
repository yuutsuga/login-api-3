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
route.get('/users/id/', async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(401).send('please enter a valid id');
    }

    const user = await prisma.user.findFirst({
        where: {
            id
        },
        select: {
            id,
            name: true, 
            username: true
        }
    });

    if (user == null) {
        return res.status(404).send('user not found');
    }

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

    // const searchUserName = await prisma.user.findFirst({
    //     where: {
    //         username
    //     },
    //     select: {
    //         username: true
    //     }
    // });

    // if (searchUserName) {
    //     return res.status(401).send('user already exists');
    // }

    res.status(200).send({ user });
});

// route to edit user
route.put('/users/:id', async (req, res) => {
    const { userId }: any = req.params;
    const { name, username } = req.body;

    if (!userId) {
        return res.status(404).send('user not found');
    }

    if (!name || !username) {
        return res.status(401).send('missing fields');
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
    const { id }: any = req.params;

    if (!id) {
        return res.status(404).send('user not found');
    }

    const deleteUser = await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    });

    if (!deleteUser) {
        return res.status(401).send({ deleted: false });
    }

    // const userId = await prisma.user.findFirst({
    //     where: {
    //         id
    //     }
    // });

    // if (id !== userId) {
    //     return res.status(401).send('please enter a valid id');
    // }

    res.status(200).send({ deleted: true });
});

export default route;