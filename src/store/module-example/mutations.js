import Vue from 'vue'
export function delTask (state, payload) {
  // console.log(payload)
  Vue.delete(state.tasks, payload)
}

export function updateTask (state, payload) {
  // console.log(payload)
  Object.assign(state.tasks[payload.id], payload.update)
}

export function AddTodo (state, payload) {
  Vue.set(state.tasks, payload.id, payload.task) 
}
