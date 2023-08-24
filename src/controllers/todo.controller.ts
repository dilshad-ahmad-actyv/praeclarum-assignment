

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
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}


export const getTodo = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const todo = await Todo.findOneBy({ id });
        if (!todo) {
            res.status(404).json({ message: 'List does not exist' });
        } else {
            res.status(200).send(todo);
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
        let todo = await Todo.findOneBy({ id });
        if (!todo) {
            res.status(404).json({ message: 'List does not exist' });
        } else {
            await Todo.update({ id }, req.body);
            todo = await Todo.findOneBy({ id });
            res.status(200).json(todo);
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
        const todo = await Todo.findOneBy({ id });
        if (!todo) {
            res.status(404).json({ message: 'List does not exist' });
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