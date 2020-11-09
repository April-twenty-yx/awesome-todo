<template>
  <div>
    <list-header bg-color="bg-orange-4">Todos</list-header>
    <q-list
      bordered 
      separator
      
    >
      <task v-for="(task, key) in taskTodos" :key="key" :id="key" :task="task"></task>
    </q-list>
  </div>
  
</template>

<script>
import ListHeader from 'components/ListHeader'
import Task from 'components/Task'
export default {
  props: {
    taskTodos: {
      type: Object
    }
  },
  components: {
    Task,
    ListHeader
  }
}
</script>

<style lang="">
  
</style>
