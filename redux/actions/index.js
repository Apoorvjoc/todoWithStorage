let nextId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextId++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const deleteTodo = (id) => ({
  type: "REMOVE_TODO",
  id,
});

export const removeAll = () => ({
  type: "REMOVE_ALL",
});
