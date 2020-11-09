
export function taskTodos (state) {
  // return state.tasks
  let tasks = {}
  Object.keys(state.tasks).forEach(function (key) {
    if (!state.tasks[key].complete) {
      tasks[key]=state.tasks[key]
    }
  })
  return tasks
}

export function taskComplete (state) {
  // return state.tasks
  let tasks = {}
  Object.keys(state.tasks).forEach(function (key) {
    if (state.tasks[key].complete) {
      tasks[key]=state.tasks[key]
    }
  })
  return tasks
}
