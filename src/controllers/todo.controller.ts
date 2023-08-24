

import { Request, Response } from "express"
import { Todo } from "../entities/todo.entity";


export const createTodo = async(req: Request, res: Response) => {
    try {
        const {title, description, status } = req.body;

        console.log(req.body);
        const newTodo = new Todo(); // Create a new instance of Todo
        newTodo.title = title;
        newTodo.description = description;
        newTodo.status = status;
        await newTodo.save();
        console.log(newTodo);
        res.send('Todo added in list successfully')
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export const getTodosLists = async (req: Request, res: Response) => {
    try {
        const users = await Todo.find();
        res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}


export const getTodo = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const user = await Todo.findOneBy({ id });
        if (!user) {
            res.status(404).json({ message: 'User does not exist' });
        } else {
            res.status(200).send(user);
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}
export const updateTodo = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { firstName, lastName } = req.body;
        let user = await Todo.findOneBy({ id });
        if (!user) {
            res.status(404).json({ message: 'User does not exist' });
        } else {
            // user.firstName = firstName;
            // user.lastName = lastName;
            // user.save();
            await Todo.update({ id }, req.body);
            user = await Todo.findOneBy({ id });
            res.status(200).json(user);
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        console.log('dis', id)
        const user = await Todo.findOneBy({ id });
        console.log('user', user);
        if (!user) {
            res.status(404).json({ message: 'User does not exist' });
        } else {
            await Todo.delete(id);
            res.status(204).json();
        }
        
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}