import { uid } from 'quasar'
export function updateTask (context, payload) {
  // console.log(payload)
  context.commit('updateTask', payload)
}

export function delTask (context, payload) {
  // 和正常的 vuex 中提交 mutations 是一样的
  context.commit('delTask', payload)
}

export function AddTodo (context, task) {
  // console.log(payload)
  let taskId = uid()
  let payload = {
    id: taskId,
    task: task
  }
  console.log(payload)
  context.commit('AddTodo', payload)
}