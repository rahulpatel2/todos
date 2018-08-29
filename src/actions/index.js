let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const showAll = { type: 'SHOW_ALL' }

export const showCompleted = { type: 'SHOW_COMPLETED' }

export const showNotCompleted = { type: 'SHOW_NOT_COMPLETED' }

