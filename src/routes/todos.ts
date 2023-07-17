import { Router } from "express";
import { createTodo, deleteTodo, getsTodos, updateTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getsTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;