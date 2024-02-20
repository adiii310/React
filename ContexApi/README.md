# Todo Context API Documentation

## Overview

This documentation provides an overview of the `TodoContext` API, which is used to manage a list of todo items in a React application. The context is created using React's `createContext` and provides a way to pass data through the component tree without having to pass props down manually at every level.

## Context Creation

The `TodoContext` is created with a default value that includes an array of todo items and several functions to manipulate the todo list.


## Custom Hook

A custom hook `useTodo` is provided to easily access the context within functional components.


## Provider Component

The `TodoProvider` component is used to wrap the part of the component tree that needs access to the todo context. It accepts a `value` prop that contains the current state of the todos and the functions to manipulate them.


## Usage in `App` Component

The `App` component uses the `TodoProvider` to provide the todo context to its child components. It maintains the state of the todos and provides functions to add, update, delete, and toggle the completion status of todos.


## Local Storage Integration

The `App` component uses `localStorage` to persist the todo list across browser sessions. It retrieves the todos from `localStorage` when the component mounts and updates `localStorage` whenever the todos state changes.

## Components

- `TodoForm`: A component for adding new todos.
- `TodoItem`: A component for displaying individual todo items.

## Functions

- `addTask(todo)`: Adds a new todo to the list.
- `updateTask(id, todo)`: Updates the task of a todo with the given ID.
- `deleteTask(id)`: Deletes a todo with the given ID.
- `toggleComplete(id)`: Toggles the completion status of a todo with the given ID.
