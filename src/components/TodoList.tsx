"use client"

import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: inputValue, completed: false }
            ]);
            setInputValue("");
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-2 py-1 border rounded" placeholder="할 일을 입력해주세요."/>
                <button onClick={addTodo} className="ml-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                    추가
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="felex items-center justify-between mb-2">
                        <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer ${
                            todo.completed ? "line-through text-gray-500" : ""
                        }`}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:underline">삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
