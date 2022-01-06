let initialState = {
  rarr: [],
  carr: [],
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.id, text: action.text, completed: false }];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "REMOVE_TODO":
      let arr = state.filter((todo) => todo.id != action.id);
      return arr;

    case "REMOVE_ALL":
      let narr = [];
      return narr;
  }
  return state;
};

export default todos;
