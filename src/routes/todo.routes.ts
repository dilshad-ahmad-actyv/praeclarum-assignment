import express from 'express';
import { createTodo, deleteTodo, getTodo, getTodosLists, updateTodo } from '../controllers/todo.controller';

const router = express.Router();

router.post('/', createTodo);
router.get('/', getTodosLists);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;