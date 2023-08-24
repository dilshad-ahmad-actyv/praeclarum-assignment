"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controller_1 = require("../controllers/todo.controller");
const router = express_1.default.Router();
router.post('/', todo_controller_1.createTodo);
router.get('/', todo_controller_1.getTodosLists);
router.get('/:id', todo_controller_1.getTodo);
router.put('/:id', todo_controller_1.updateTodo);
router.delete('/:id', todo_controller_1.deleteTodo);
exports.default = router;
