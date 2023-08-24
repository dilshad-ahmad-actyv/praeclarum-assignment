"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.getTodosLists = exports.createTodo = void 0;
const todo_entity_1 = require("../entities/todo.entity");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, status } = req.body;
        console.log(req.body);
        const newTodo = new todo_entity_1.Todo(); // Create a new instance of Todo
        newTodo.title = title;
        newTodo.description = description;
        newTodo.status = status;
        yield newTodo.save();
        console.log(newTodo);
        res.send('Todo added in list successfully');
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.createTodo = createTodo;
const getTodosLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_entity_1.Todo.find();
        res.status(200).json(todos);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getTodosLists = getTodosLists;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const todo = yield todo_entity_1.Todo.findOneBy({ id });
        if (!todo) {
            res.status(404).json({ message: 'List does not exist' });
        }
        else {
            res.status(200).send(todo);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getTodo = getTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        let todo = yield todo_entity_1.Todo.findOneBy({ id });
        if (!todo) {
            res.status(404).json({ message: 'List does not exist' });
        }
        else {
            yield todo_entity_1.Todo.update({ id }, req.body);
            todo = yield todo_entity_1.Todo.findOneBy({ id });
            res.status(200).json(todo);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const todo = yield todo_entity_1.Todo.findOneBy({ id });
        if (!todo) {
            res.status(404).json({ message: 'List does not exist' });
        }
        else {
            yield todo_entity_1.Todo.delete(id);
            res.status(204).json();
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteTodo = deleteTodo;
