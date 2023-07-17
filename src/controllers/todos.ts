import { RequestHandler } from "express";
import Todo from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, _) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({message: 'Created Todo.', createdTodo: newTodo});
};

export const getsTodos: RequestHandler = (_, res, _2) => {
    res.status(200).json({todos: TODOS});
};

export const updateTodo: RequestHandler = (req, res, _) => {
    const id = (req.params as {id: string}).id;
    const newText = (req.body as {text: string}).text;

    const todoIdx = TODOS.findIndex(todo => todo.id === id);

    if (todoIdx < 0) {
        throw new Error('Could not find todo :(');
    }

    TODOS[todoIdx] = new Todo(id, newText);

    res.status(200).json({message: 'Todo updated successfully', todo: TODOS[todoIdx]});
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const id = (req.params as {id: string}).id;
    const todoIdx = TODOS.findIndex(todo => todo.id === id);

    if (todoIdx < 0) {
        throw new Error('Could not find todo :(');
    }

    const removedTodo = TODOS.splice(todoIdx, 1);

    res.status(200).json({message: 'Todo deleted successfully', todo: removedTodo});
}