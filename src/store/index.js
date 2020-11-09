import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import moduleA from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      moduleA
    },
    // state: {
    //   count: 1,
    //   todos: [
    //     {
    //       id: 1,
    //       text: '...',
    //       done: true
    //     },
    //     {
    //       id: 2,
    //       text: '...',
    //       done: false
    //     },
    //     {
    //       id: 3,
    //       text: '...',
    //       done: true
    //     }
    //   ]
    // },
    // mutations: {
    //   increment (state, n) {
    //     state.count+=n
    //   }
    // },
    // // getters 相当于 vuex 的计算属性，会将结果缓存下来，只有当它所依赖的值改变后它才会重新进行计算
    // // .vue 文件中通过 store.getter.doneTodo 进行访问 this.$store.getters.doneTodo
    // getters: {
    //   doneTodo (state) {
    //     return state.todos.filter(todo => todo.done)
    //   },
    //   // getter 可以接受其他 getter 作为第二个参数
    //   doneLen (state, getters) {
    //     return getters.doneTodo.length
    //   },
    //   getTodoById: (state) => (id) => {
    //     return state.todos.find(todo => todo.id === id)
    //   }
    // },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
